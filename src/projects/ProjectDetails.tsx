import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CurrencyFormat from "react-currency-format";

import { useProjectByIdQuery } from "../api/projectsApi";
import { employeeByIdQuery } from "../api/employeesApi";

interface ProjectDetailsProps {}

export const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  const { projectId } = useParams();
  if (!projectId) {
    throw new Error("projectId is required");
  }

  const { data: project, isLoading: isLoadingProject } =
    useProjectByIdQuery(projectId);

  const { data: manager } = useQuery({
    ...employeeByIdQuery(project?.manager ?? 0),
    enabled: !!project,
  });

  const managerDisplayed = manager
    ? `${manager.firstName} ${manager.lastName} (${manager.title})`
    : "Loading...";

  if (!project || isLoadingProject) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{project.name}</h1>
      <div>{project.description}</div>
      <div>
        <CurrencyFormat
          value={project.budget}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div>
        <strong>manager</strong>: {managerDisplayed}
      </div>
      <div>
        <strong>team</strong>: {project.team + ","}
      </div>
    </>
  );
};

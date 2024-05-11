import React from "react";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { Project } from "../api/dto";

interface ProjectDetailsProps {}

export const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  const { projectId } = useParams();
  if (!projectId) {
    throw new Error("projectId is required");
  }

  let project: Project | undefined;
  const isLoadingProject = true;

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

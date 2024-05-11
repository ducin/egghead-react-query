import React from "react";

import { ProjectRow } from "./ProjectRow";
import { Project } from "../api/dto";

interface ProjectsPageProps {}

export const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const data: Project[] = [];

  return (
    <>
      <h1>Projects List</h1>
      <ol>
        {data.map((project) => (
          <li key={project.id}>
            <ProjectRow project={project} />
          </li>
        ))}
      </ol>
    </>
  );
};

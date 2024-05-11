import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { Project } from "../api/dto";

interface ProjectRowProps {
  project: Project;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <>
      <Link to={`/projects/${project.id}`}>{project.name}</Link>,
      {project.description},
      <CurrencyFormat
        value={project.budget}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      , {project.startDate}, {project.endDate}
    </>
  );
};

import React from 'react';
import { Project } from '../api/dto';
import CurrencyFormat from 'react-currency-format';

interface ProjectRowProps {
  project: Project
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return <>
    {project.name}, {project.description}, 
    <CurrencyFormat value={project.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    , {project.startDate}, {project.endDate}
  </>
}

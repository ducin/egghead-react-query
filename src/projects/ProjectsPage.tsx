import React from 'react';
import { ProjectRow } from './ProjectRow';
import { useProjectsQuery } from '../api/projectsApi';

interface ProjectsPageProps {}

export const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { data, isLoading } = useProjectsQuery()

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  return <>
    <h1>Projects List</h1>
    <ol>
      {data.map(project => <li><ProjectRow project={project} /></li>)}
    </ol>
  </>
}

import { API_URL } from "../env";
import { Project } from "./dto";

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  const data = (await response.json()) as Project[];
  return data;
};

export const getProjectById = async (id: Project["id"]) => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  const data = (await response.json()) as Project;
  return data;
};

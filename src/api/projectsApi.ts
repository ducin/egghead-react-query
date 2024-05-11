import { useQuery } from "@tanstack/react-query";
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

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: ["projects", "list"],
    queryFn: async () => {
      return getProjects();
    },
  });
};

export const useProjectByIdQuery = (id: Project["id"]) => {
  return useQuery({
    queryKey: ["projects", "details", id] as const,
    queryFn: ({ queryKey: [, , id] }) => {
      return getProjectById(id);
    },
  });
};

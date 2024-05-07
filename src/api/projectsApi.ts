import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../env"
import { Project } from "./dto"

export const getProjects = async () => {
    const response = await fetch(`${API_URL}/projects`)
    const data = await response.json()
    return data
}

export const useProjectsQuery = () => {
    return useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: async () => {
            return getProjects()
        },
      })
}

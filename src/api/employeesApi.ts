import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../env"
import { Employee } from "./dto"

export const getEmployees = async () => {
    const response = await fetch(`${API_URL}/employees`)
    const data = await response.json()
    return data
}

export const useEmployeesQuery = () => {
    return useQuery<Employee[]>({
        queryKey: ['employees'],
        queryFn: async () => {
            return getEmployees()
        },
      })
}

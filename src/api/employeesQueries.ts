import { useQuery, queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./employeesApi";

export const employeesQuery = queryOptions({
  queryKey: ["employees", "list"],
  queryFn: async () => {
    return getEmployees();
  },
  staleTime: 1000 * 15,
  gcTime: 1000 * 3,
});

export const useEmployeesQuery = () => {
  return useQuery(employeesQuery);
};

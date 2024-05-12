import { useQuery, queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./employeesApi";

export const employeesQuery = queryOptions({
  queryKey: ["employees", "list"],
  queryFn: async () => {
    return getEmployees();
  },
  staleTime: 1000 * 15,
});

export const useEmployeesQuery = () => {
  return useQuery(employeesQuery);
};

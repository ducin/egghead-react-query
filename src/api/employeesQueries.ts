import { useQuery, useQueries, queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./employeesApi";

export const employeesQuery = queryOptions({
  queryKey: ["employees", "list"],
  queryFn: async () => {
    return getEmployees();
  },
});

export const useEmployeesQuery = () => {
  return useQuery(employeesQuery);
};

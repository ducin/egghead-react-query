import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./employeesApi";

export const useEmployeesQuery = () => {
  return useQuery({
    queryKey: ["employees", "list"],
    queryFn: async () => {
      return getEmployees();
    },
  });
};

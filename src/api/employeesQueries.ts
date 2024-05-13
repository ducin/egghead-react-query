import { queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./employeesApi";
import { Employee } from "./dto";

type EmployeeQueryParams = Partial<Pick<Employee, "nationality" | "lastName">>;

export const employeesQuery = (params: EmployeeQueryParams) =>
  queryOptions({
    queryKey: ["employees", "list", params],
    queryFn: async () => {
      return getEmployees(params);
    },
    staleTime: 1000 * 15,
    gcTime: 1000 * 3,
  });

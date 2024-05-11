import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { API_URL } from "../env";
import { Employee } from "./dto";
import { applyQueryString } from "./queryString";

type EmployeeSearchParams = Partial<Pick<Employee, "nationality" | "lastName">>;

export const getEmployees = async (
  filters: EmployeeSearchParams = {},
  page = 1
) => {
  const query = applyQueryString({ ...filters, _page: page });
  console.log(query);
  const response = await fetch(`${API_URL}/employees${query}`);
  const data = (await response.json()) as Employee[];
  return data;
};

export const getEmployeeById = async (id: Employee["id"]) => {
  const response = await fetch(`${API_URL}/employees/${id}`);
  const data = (await response.json()) as Employee;
  return data;
};

export const deleteEmployee = async (id: Employee["id"]) => {
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: "DELETE",
  });
  const data = (await response.json()) as void;
  return data;
};

type PatchEmployeeRequest = Pick<Employee, "id"> &
  Partial<Omit<Employee, "id">>;

export const patchEmployee = async (payload: PatchEmployeeRequest) => {
  const { id, ...body } = payload;
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json()) as void;
  return data;
};

export const employeesQuery = queryOptions({
  queryKey: ["employees", "list"] as const,
  queryFn: async () => {
    return getEmployees();
  },
});

export const employeeByIdQuery = (id: Employee["id"]) =>
  queryOptions({
    queryKey: ["employees", "details", id] as const,
    queryFn: async () => {
      return getEmployeeById(id);
    },
  });

export const useEmployeesQuery = (search: EmployeeSearchParams = {}) => {
  // return useQuery<Employee[]>({
  return useQuery({
    queryKey: ["employees", "list", search],
    queryFn: async () => {
      return getEmployees(search);
    },
  });
};

export const useEmployeeByIdQuery = (id: Employee["id"]) => {
  return useQuery({
    queryKey: ["employees", "details", id] as const,
    queryFn: ({ queryKey: [, , id] }) => {
      return getEmployeeById(id);
    },
  });
  // if we start passing generic types explicitly (instead of using type inference fro, queryFn), we lose the queryKey type inference:
  // return useQuery<Employee>({
  //   queryKey: ["employees", "details", id] as const,
  //   queryFn: ({ queryKey: [, , id] }) => {
  //     return getEmployeeById(id);
  //   },
  // });
};

export const useDeleteEmployeeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,
    onMutate: async (employeeId) => {
      console.log("do something here");
    },
    onSuccess: async (_, id) => {
      // FORCE REFETCH
      await queryClient.refetchQueries({ queryKey: ["employees", "list"] });

      // INVALIDATE QUERIES
      // await queryClient.invalidateQueries({ queryKey: ["employees", "list"]});

      // REMOVE QUERIES
      await queryClient.removeQueries({
        queryKey: ["employees", "details", id],
      });

      // UPDATE LOCAL STATE
      // queryClient.setQueryData<Employee[]>(
      //   ["employees", "list"],
      //   (oldEmployees) => {
      //     if (oldEmployees) {
      //       return oldEmployees.filter((employee) => employee.id !== id);
      //     }
      //   }
      // );
    },
    onError: (error, employeeId, context) => {
      // if (context?.previousEmployees) {
      //   queryClient.setQueryData<Employee[]>(
      //     ["employees", "list"],
      //     context.previousEmployees
      //   );
      // }
    },
  });
};

export const useEmployeeRaiseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchEmployee,
    onMutate: async ({ salary }: PatchEmployeeRequest) => {
      if (!salary) {
        throw new Error("salary is required");
      }
    },
    onSuccess: async (_, { id, salary }) => {
      // UPDATE LOCAL STATE
      // no query types. Again - use queryOptions API 🔥
      // queryClient.setQueryData<Employee>(
      //   ["employees", "details", id],
      //   (oldEmployeeData) => {
      //     if (oldEmployeeData) {
      //       return { ...oldEmployeeData, salary: salary! };
      //     }
      //   }
      // );

      // with queryOptions API
      queryClient.setQueryData(
        employeeByIdQuery(id).queryKey,
        (oldEmployeeData) => {
          if (oldEmployeeData) {
            return { ...oldEmployeeData, salary: salary! };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: ["employees", "list"] });
    },
  });
};

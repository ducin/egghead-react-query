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

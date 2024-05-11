import React from "react";

import { EmployeeListing } from "./EmployeeListing";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../api/employeesApi";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data } = useQuery({
    queryKey: ["employees", "list"],
    queryFn: async () => {
      return getEmployees();
    },
  });
  return (
    <>
      <h1>Employees List</h1>
      {data && <EmployeeListing employees={data} />}
    </>
  );
};

import React from "react";

import { EmployeeListing } from "./EmployeeListing";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../api/employeesApi";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data, isPending, isFetching, isLoading, error } = useQuery({
    queryKey: ["employees", "list"],
    queryFn: async () => {
      return getEmployees();
    },
  });

  if (isPending) {
    return <span>there is no data to be displayed...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <h1>Employees List</h1>
      {isFetching && <span>loading...</span>}
      <EmployeeListing employees={data} />
    </>
  );
};

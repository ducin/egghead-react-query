import React from "react";

import { EmployeeListing } from "./EmployeeListing";
import { employeesQuery } from "../api/employeesQueries";
import { useQuery } from "@tanstack/react-query";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data, isPending, error } = useQuery(employeesQuery);

  if (isPending) {
    return <span>loading...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <h1>Employees List</h1>
      <EmployeeListing employees={data} />
    </>
  );
};

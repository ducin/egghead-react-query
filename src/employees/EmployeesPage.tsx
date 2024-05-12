import React from "react";

import { EmployeeListing } from "./EmployeeListing";
import { useEmployeesQuery } from "../api/employeesQueries";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data, isPending, error } = useEmployeesQuery();

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

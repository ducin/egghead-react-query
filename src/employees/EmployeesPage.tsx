import React, { useMemo, useState } from "react";

import { EmployeeListing } from "./EmployeeListing";
import { employeesQuery } from "../api/employeesQueries";
import { useQuery } from "@tanstack/react-query";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data, isPending, isFetching, error } = useQuery(employeesQuery);

  const [searchName, setSearchName] = useState("");

  const clientSideFilteredEmployee = useMemo(() => {
    return data?.filter((e) =>
      e.lastName.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [data, searchName]);

  if (isPending) {
    return <span>there is no data to be displayed...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <h1>Employees List</h1>
      <input
        type="text"
        placeholder="search by name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      {isFetching && <span>loading...</span>}

      {clientSideFilteredEmployee && (
        <EmployeeListing employees={clientSideFilteredEmployee} />
      )}
    </>
  );
};

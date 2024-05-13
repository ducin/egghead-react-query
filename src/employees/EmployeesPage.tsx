import React, { useState } from "react";

import { EmployeeListing } from "./EmployeeListing";
import { employeesQuery } from "../api/employeesQueries";
import { useQuery } from "@tanstack/react-query";
import { Nationality } from "../api/dto";
import { NationalityDropdown } from "./NationalityDropdown";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const [searchName, setSearchName] = useState("");
  const [searchNationality, setSearchNationality] = useState<Nationality>();

  const { data, isPending, isFetching, error } = useQuery(
    employeesQuery({
      lastName: searchName,
      nationality: searchNationality,
    })
  );

  return (
    <>
      <h1>Employees List</h1>
      <input
        type="text"
        placeholder="search by name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <NationalityDropdown onChange={setSearchNationality} />
      {isFetching && <span>loading...</span>}

      {isPending ? (
        <span>there is no data to be displayed...</span>
      ) : error ? (
        <span>{error.message}</span>
      ) : (
        <EmployeeListing employees={data} />
      )}
    </>
  );
};

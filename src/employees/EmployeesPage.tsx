import React, { useMemo, useState } from "react";

import { useEmployeesQuery } from "../api/employeesApi";
import { EmployeeListing } from "./EmployeeListing";
import { NationalityDropdown } from "./NationalityDropdown";
import { Nationality } from "../api/dto";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const [searchName, setSearchName] = useState("");

  const [searchNationality, setSearchNationality] = useState<Nationality>();

  const { data, isLoading } = useEmployeesQuery({
    lastName: searchName,
    nationality: searchNationality,
  });

  const clientSideFilteredEmployees = useMemo(() => {
    const employees = data || [];
    return employees.filter((employee) =>
      employee.lastName.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [data, searchName]);

  return (
    <>
      <h1>Employees List</h1>
      <input
        type="text"
        placeholder="search name..."
        value={searchName}
        onChange={(e) => setSearchName((e.target as HTMLInputElement).value)}
      />
      <NationalityDropdown onChange={setSearchNationality} />
      {!data || isLoading ? (
        <div>Loading...</div>
      ) : (
        <EmployeeListing employees={data} />
        // <EmployeeListing employees={clientSideFilteredEmployees} />
      )}
    </>
  );
};

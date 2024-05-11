import React, { useMemo, useState } from "react";

import { EmployeeListing } from "./EmployeeListing";
import { NationalityDropdown } from "./NationalityDropdown";
import { Nationality } from "../api/dto";

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  return (
    <>
      <h1>Employees List</h1>
      <EmployeeListing employees={[]} />
    </>
  );
};

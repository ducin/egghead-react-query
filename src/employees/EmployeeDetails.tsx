import React from "react";
import { useParams } from "react-router-dom";

import { useEmployeeByIdQuery } from "../api/employeesApi";
import CurrencyFormat from "react-currency-format";

interface EmployeeDetailsProps {}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = () => {
  const { employeeId } = useParams();
  if (!employeeId) {
    throw new Error("employeeId is required");
  }

  const { data: employee, isLoading } = useEmployeeByIdQuery(
    parseInt(employeeId)
  );

  if (!employee || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <div>
        <strong>position</strong>: {employee.title}
      </div>
      <div>
        <strong>salary</strong>:{" "}
        <CurrencyFormat
          value={employee.salary}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div>
        <strong>hired at</strong>: {employee.hiredAt}
      </div>
      <div>
        <strong>skills</strong>: {employee.skills.join(", ")}
      </div>
    </>
  );
};

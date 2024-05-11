import React, { useCallback } from "react";

import { Employee } from "../api/dto";
import { EmployeeRow } from "./EmployeeRow";

interface EmployeeListingProps {
  employees: Employee[];
}

export const EmployeeListing: React.FC<EmployeeListingProps> = (props) => {
  const { employees } = props;

  const onEmployeeDismiss = useCallback((employee: Employee) => {
    console.log("dismiss employee", employee);
  }, []);

  const onEmployeeRaise = useCallback((employee: Employee) => {
    console.log("give raise to employee", employee);
  }, []);

  return (
    <>
      <ol>
        {employees.map((employee) => (
          <li key={employee.id}>
            <EmployeeRow employee={employee}>
              <button onClick={() => onEmployeeDismiss(employee)}>
                🚪 dismiss
              </button>
              <button onClick={() => onEmployeeRaise(employee)}>
                💰 give raise
              </button>
            </EmployeeRow>
          </li>
        ))}
      </ol>
    </>
  );
};

import React, { useCallback } from "react";

import { Employee } from "../api/dto";
import { EmployeeRow } from "./EmployeeRow";
import {
  useDeleteEmployeeMutation,
  useEmployeeRaiseMutation,
} from "../api/employeesApi";

interface EmployeeListingProps {
  employees: Employee[];
}

export const EmployeeListing: React.FC<EmployeeListingProps> = (props) => {
  const { employees } = props;

  const deleteEmployeeMutation = useDeleteEmployeeMutation();

  const onEmployeeDismiss = useCallback(
    (employee: Employee) => {
      console.log("dismiss employee", employee);
      deleteEmployeeMutation.mutate(employee.id);
    },
    [deleteEmployeeMutation]
  );

  const employeeRaiseMutation = useEmployeeRaiseMutation();

  const onEmployeeRaise = useCallback(
    (employee: Employee) => {
      console.log("give raise to employee", employee);
      employeeRaiseMutation.mutate({
        id: employee.id,
        salary: employee.salary + 1000,
      });
    },
    [employeeRaiseMutation]
  );

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

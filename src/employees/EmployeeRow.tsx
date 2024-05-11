import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { Employee } from "../api/dto";
import { EmployeeThumbnailImage } from "./EmployeeImage";

import cssClass from "./Row.module.css";

interface EmployeeRowProps {
  employee: Employee;
  children?: React.ReactNode;
}

export const EmployeeRow: React.FC<EmployeeRowProps> = (props) => {
  const { employee, children } = props;
  return (
    <>
      <EmployeeThumbnailImage employee={employee} />
      <span className={cssClass["list-row"]}>
        <span className={cssClass["section"]}>
          <strong>
            <Link to={`/employees/${employee.id}`}>
              {employee.firstName} {employee.lastName},<em>position</em>:{" "}
              {employee.title}
            </Link>
          </strong>
        </span>
        <span className={cssClass["section"]}>
          <em>salary</em>:{" "}
          <CurrencyFormat
            value={employee.salary}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </span>
        {children && <span className={cssClass["section"]}>{children}</span>}
      </span>
    </>
  );
};

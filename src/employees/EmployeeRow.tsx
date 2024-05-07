import React from 'react';
import { Employee } from '../api/dto';
import CurrencyFormat from 'react-currency-format';


interface EmployeeRowProps {
  employee: Employee
}

export const EmployeeRow: React.FC<EmployeeRowProps> = (props) => {
  const { employee } = props
  return <>
    {employee.firstName} {employee.lastName}, {employee.title},
    <CurrencyFormat value={employee.salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />
  </>
}

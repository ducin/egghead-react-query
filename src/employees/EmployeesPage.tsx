import React from 'react';
import { EmployeeRow } from './EmployeeRow';
import { useEmployeesQuery } from '../api/employeesApi';

interface EmployeesPageProps {}

export const EmployeesPage: React.FC<EmployeesPageProps> = () => {
  const { data, isLoading } = useEmployeesQuery()

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  return <>
    <h1>Employees List</h1>
    <ol>
      {data.map(employee => <li><EmployeeRow employee={employee} /></li>)}
    </ol>
  </>
}

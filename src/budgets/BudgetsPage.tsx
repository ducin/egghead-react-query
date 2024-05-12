import React from "react";
import { BudgetTable } from "./BudgetTable";
import { Benefit, Employee } from "../api/dto";
import { useQuery } from "@tanstack/react-query";
import { employeesQuery } from "../api/employeesQueries";
import { benefitsQuery } from "../api/benefitsQueries";

function salariesCosts(employees: Employee[]) {
  const monthly = employees.reduce((total, e) => total + e.salary, 0);
  const yearly = monthly * 12;
  return { monthly, yearly };
}

function benefitCosts(benefits: Benefit[]) {
  const monthly = benefits.reduce((total, b) => total + b.monthlyFee, 0);
  const yearly = monthly * 12;
  return { monthly, yearly };
}

interface BudgetsPageProps {}

export const BudgetsPage: React.FC<BudgetsPageProps> = () => {
  const { data: dataEmployees } = useQuery(employeesQuery);
  const salaries = dataEmployees && salariesCosts(dataEmployees);

  const { data: benefitsData } = useQuery(benefitsQuery);
  const benefits = benefitsData && benefitCosts(benefitsData);

  return (
    <>
      <h1>Budgets</h1>
      <BudgetTable salaries={salaries} benefits={benefits} />
    </>
  );
};

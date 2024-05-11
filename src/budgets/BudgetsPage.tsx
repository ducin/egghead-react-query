import React from "react";
import { BudgetTable } from "./BudgetTable";
import { useEmployeesQuery } from "../api/employeesApi";
import { useBenefitsQuery } from "../api/benefitsApi";

interface BudgetsPageProps {}

export const BudgetsPage: React.FC<BudgetsPageProps> = () => {
  const { data: employeesData } = useEmployeesQuery();
  const { data: benefitsData } = useBenefitsQuery();

  // just some calculation 🤷‍♀️
  const salaries = employeesData
    ?.map((employee) => employee.salary)
    .reduce(
      (acc, salary) => {
        acc.monthly += salary;
        acc.yearly += salary * 12;
        return acc;
      },
      { monthly: 0, yearly: 0 }
    );

  const benefits = benefitsData
    ?.map((benefit) => benefit.monthlyFee)
    .reduce(
      (acc, amount) => {
        acc.monthly += amount;
        acc.yearly += amount * 12;
        return acc;
      },
      { monthly: 0, yearly: 0 }
    );

  return (
    <>
      <h1>Budgets</h1>
      <BudgetTable salaries={salaries} benefits={benefits} />
    </>
  );
};

import React from "react";
import { BudgetTable } from "./BudgetTable";

interface BudgetsPageProps {}

export const BudgetsPage: React.FC<BudgetsPageProps> = () => {
  // just some calculation 🤷‍♀️
  const salaries = { monthly: 0, yearly: 0 };
  const benefits = { monthly: 0, yearly: 0 };

  return (
    <>
      <h1>Budgets</h1>
      <BudgetTable salaries={salaries} benefits={benefits} />
    </>
  );
};

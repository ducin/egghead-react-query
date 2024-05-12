import React from "react";
import { BudgetTable } from "./BudgetTable";
import { Benefit, Employee } from "../api/dto";

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
  const salaries = salariesCosts([]);
  // const salaries = { monthly: 0, yearly: 0 };
  const benefits = benefitCosts([]);
  // const benefits = { monthly: 0, yearly: 0 };

  return (
    <>
      <h1>Budgets</h1>
      <BudgetTable salaries={salaries} benefits={benefits} />
    </>
  );
};

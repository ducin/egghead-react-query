import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { EmployeesPage } from "./employees/EmployeesPage";
import { ProjectsPage } from "./projects/ProjectsPage";
import { EmployeeDetails } from "./employees/EmployeeDetails";
import { BudgetsPage } from "./budgets/BudgetsPage";
import { ProjectDetails } from "./projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Welcome</h1>,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
      {
        path: "employees/:employeeId",
        element: <EmployeeDetails />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/budgets",
        element: <BudgetsPage />,
      },
    ],
  },
]);

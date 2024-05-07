import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { EmployeesPage } from "./employees/EmployeesPage";
import { ProjectsPage } from "./projects/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
    ],
  },
]);
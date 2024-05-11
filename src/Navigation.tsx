import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>👋</Link>
        </li>
        <li>
          <Link to={`employees`}>Employees</Link>
        </li>
        <li>
          <Link to={`projects`}>Projects</Link>
        </li>
        <li>
          <Link to={`budgets`}>Budgets</Link>
        </li>
      </ul>
    </nav>
  );
};

// import reactLogo from './assets/react.svg'
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default App;

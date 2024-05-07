// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={`projects`}>Projects</Link>
            </li>
            <li>
              <Link to={`employees`}>Employees</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default App

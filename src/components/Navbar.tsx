import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper teal lighten-2 px1">
      <a href="/" className="brand-logo">
        Logo
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

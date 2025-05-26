import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashoboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import './style.sass'

export default function Navigation() {
  const data = [
    {
      title: `Home`,
      path: `/`,
    },
    {
      title: `Users`,
      path: `/users`,
    },
  ];

  return (
    <nav>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

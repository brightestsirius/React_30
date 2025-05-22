import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function TodosList() {
  const todos = useLoaderData();
  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <Link to={`/todos/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}

import React from "react";
import { Outlet, useLoaderData, Link } from "react-router-dom";

export default function UsersRoute() {
  const users = useLoaderData();

  return (
    <div>
      <h2>UsersRoute</h2>

      <ul>
        {users.length
          ? users.map((item) => (
              <li key={item.id}>
                <Link to={`/users/${item.id}`}>{item.name}</Link>
              </li>
            ))
          : null}
      </ul>

      <Outlet />
    </div>
  );
}

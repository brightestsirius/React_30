import React from "react";
import {Outlet} from 'react-router-dom'

import Welcome from "./../components/Welcome/Welcome";

export default function HomeRoute() {
  return (
    <div>
      <h2>HomeRoute</h2>

      <Welcome />
      <Outlet />
    </div>
  );
}
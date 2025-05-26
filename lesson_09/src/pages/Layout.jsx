import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Loader from "../components/Loader/Loader";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

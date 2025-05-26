import React, { useState, lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import TodosRoute from "./routes/TodosRoute";
import TodoRoute from "./routes/TodoRoute";
import ErrorRoute from "./routes/ErrorRoute";

import LoaderFallback from "./components/LoaderFallback/LoaderFallback";

import Layout from "./pages/Layout";

import service from "./services/mockapi";

import TodosFilter from "./components/TodosFilter/TodosFilter";

import AuthContext from "./contexts/AuthContext";
import AuthGuard from "./HOC/AuthGuard";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));
const TodosRouteLazy = lazy(() => import("./routes/TodosRoute"));
const TodoRouteLazy = lazy(() => import("./routes/TodoRoute"));
const ErrorRouteLazy = lazy(() => import("./routes/ErrorRoute"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRouteLazy />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <HomeRouteLazy />
          </Suspense>
        ),
        children: [
          {
            path: `/filter`,
            element: (
              <AuthGuard>
                  <TodosFilter />
              </AuthGuard>
            ),
          },
        ],
      },
      {
        path: "/todos",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <TodosRouteLazy />
          </Suspense>
        ),
        loader: () => service.get(`todos`),
        HydrateFallback: LoaderFallback,
      },
      {
        path: "/todos/:id",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <TodoRouteLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

import React, { useState, lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Loader from "./components/Loader/Loader";

import service from "./services/mockapi";

import AuthContext from "./contexts/AuthContext";

import AuthGuard from "./HOC/AuthGuard";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));
const TodosRouteLazy = lazy(() => import("./routes/TodosRoute"));
const TodoRouteLazy = lazy(() => import("./routes/TodoRoute"));
const ErrorRouteLazy = lazy(() => import("./routes/ErrorRoute"));
const TodosSortLazy = lazy(() => import("./components/TodosSort/TodosSort"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRouteLazy />,
    children: [
      {
        path: "/",
        element: <HomeRouteLazy />,
        children: [
          {
            path: `/dashboard`,
            element: (
              <AuthGuard>
                <TodosSortLazy />
              </AuthGuard>
            ),
          },
        ],
      },
      {
        path: "/todos",
        element: <TodosRouteLazy />,
        loader: () => service.get(`todos`),
        HydrateFallback: Loader,
      },
      {
        path: "/todos/:id",
        element: <TodoRouteLazy />,
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

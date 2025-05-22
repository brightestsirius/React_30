import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import TodosRoute from "./routes/TodosRoute";
import TodoRoute from './routes/TodoRoute'
import ErrorRoute from "./routes/ErrorRoute";

import Layout from "./pages/Layout";

import service from "./services/mockapi";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/todos",
        element: <TodosRoute />,
        loader: () => service.get(`todos`)
      },
      {
        path: "/todos/:id",
        element: <TodoRoute />,
        loader: ({params}) => service.get(`todos`, params.id)
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

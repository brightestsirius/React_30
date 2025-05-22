import React, {lazy} from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout/Layout";

import UserRoute from './routes/UserRoute'
import ErrorRoute from "./routes/ErrorRoute";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));
const UsersRouteLazy = lazy(() => import("./routes/UsersRoute"));

import service from './services/mockapi'

let router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <HomeRouteLazy />,
      },
      {
        path: "/users",
        element: <UsersRouteLazy />,
        loader: async () => service.get(`users`)
      },
      {
        path: "/users/:id",
        element: <UserRoute />,
        loader: async ({params}) => service.get(`users`, params.id)
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

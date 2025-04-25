import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Main } from "../../pages/main";
import { Layout } from "../../shared/layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "catalog",
        element: "catalog",
      },
      {
        path: "login",
        element: "login",
      },
      {
        path: "register",
        element: "register",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

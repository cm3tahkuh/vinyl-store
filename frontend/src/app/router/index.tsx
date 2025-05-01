import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Main } from "@pages/main";
import { Layout } from "@shared/layout";
import { Catalog } from "@pages/catalog";

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
        element: <Catalog />,
      },
      {
        path: "login",
        element: "login",
      },
      {
        path: "register",
        element: "register",
      },
      {
        path: "cart",
        element: "cart",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

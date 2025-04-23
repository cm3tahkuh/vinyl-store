import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../pages/main";
import { Layout } from "../../shared/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "test",
        element: "",
      },
    ],
  },
]);

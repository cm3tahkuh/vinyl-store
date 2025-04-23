import { RadixThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import React from "react";

const App: React.FC = () => {
  return (
    <RadixThemeProvider>
      <RouterProvider router={router} />
    </RadixThemeProvider>
  );
};

export default App;

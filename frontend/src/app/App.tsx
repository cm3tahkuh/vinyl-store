import { RadixThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <RadixThemeProvider>
      <RouterProvider router={router} />
    </RadixThemeProvider>
  );
}

export default App;

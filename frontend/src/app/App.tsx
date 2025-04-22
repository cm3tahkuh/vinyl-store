
import { RadixThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Layout } from "../shared/layout";

function App() {
  return (
    <RadixThemeProvider>
      <Layout>
      <RouterProvider router={router} />
      </Layout>
    </RadixThemeProvider>
  );
}

export default App;

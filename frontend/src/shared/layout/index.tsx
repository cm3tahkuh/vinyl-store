import { PropsWithChildren } from "react";
import { Header } from "../../widgets/header";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

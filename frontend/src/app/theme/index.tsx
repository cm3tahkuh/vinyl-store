import { PropsWithChildren } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";

export const RadixThemeProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Theme accentColor="lime" grayColor="gray">
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  );
};

import { ReactNode } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Theme } from "../shared/styles/theme";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <MuiThemeProvider theme={Theme}>{children}</MuiThemeProvider>;
};

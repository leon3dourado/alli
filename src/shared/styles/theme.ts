import { createTheme } from "@material-ui/core";
import { Colors } from "../../constants/colors";

export const Theme = createTheme({
  palette: {
    primary: {
      main: Colors.secondary
    },
    secondary: {
      main: Colors.primary
    }
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
});

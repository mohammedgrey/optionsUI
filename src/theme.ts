import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#d7ae5a",
    },
    secondary: {
      main: "#37393d",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;

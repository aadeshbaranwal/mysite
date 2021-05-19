import { createMuiTheme } from "@material-ui/core/styles";
const roboto = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#673AB7",
    },
  },
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        "&:last-child": {
          paddingRight: 5,
        },
        fontWeight: "600",
      },
    },
  },
});
export default theme;

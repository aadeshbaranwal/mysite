import "./App.css";
import Home from "./Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { Router } from "react-router-dom";
import "./App.css";

// MUI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

// Routes
import Routes from "./Routes";

// helpers
import { history } from "./helpers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

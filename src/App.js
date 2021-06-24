import React from 'react';

// MUI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hi</h1>
    </ThemeProvider>
  );
}

export default App;

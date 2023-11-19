import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import Routes from "./Routes";

import { theme } from "src/utils/constants/ui";

import "./App.css";

const router = createHashRouter([{ path: "*", Component: Routes }]);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

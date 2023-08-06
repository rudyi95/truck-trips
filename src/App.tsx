import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import "./App.css";

const router = createBrowserRouter([{ path: "*", Component: Routes }]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

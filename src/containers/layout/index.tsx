import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header } from "../header";

export const Layout: React.FC = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Header />
      <Outlet />
    </Box>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

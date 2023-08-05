import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <Box>
      <Typography>Header</Typography>
      <Outlet />
    </Box>
  );
};

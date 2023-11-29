import React from "react";
import { Box } from "@mui/material";

import { Dashboard } from "../../containers";

const MainPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <Dashboard />
    </Box>
  );
};

export default MainPage;

import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography variant="h2">Dashboard</Typography>
      <Button onClick={() => navigate("add-trip")} variant="contained">
        Add trip
      </Button>
      <Button onClick={() => navigate("trips")} variant="contained">
        Trips table
      </Button>
    </Box>
  );
};

export default MainPage;

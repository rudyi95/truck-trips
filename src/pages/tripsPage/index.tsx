import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const TripsPage: React.FC = () => {
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
      <Typography variant="h2">Trips list</Typography>
      <Button onClick={() => navigate("/truck-trips")} variant="contained">
        Go to dashboard
      </Button>
    </Box>
  );
};

export default TripsPage;

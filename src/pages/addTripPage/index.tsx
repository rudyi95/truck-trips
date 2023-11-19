import React from "react";

import { Box } from "@mui/material";
import { AddTripForm } from "src/containers";

const AddTripPage: React.FC = () => {
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
      <AddTripForm />
    </Box>
  );
};

export default AddTripPage;

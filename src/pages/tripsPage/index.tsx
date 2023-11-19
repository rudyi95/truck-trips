import React from "react";

import { Box, Typography } from "@mui/material";

const TripsPage: React.FC = () => {
  const data = sessionStorage.getItem("trip");
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
      {!data
        ? "No Data"
        : Object.entries(JSON.parse(data)).map(([key, value]: any) => {
            return (
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography sx={{ textTransform: "capitalize" }}>{key}</Typography>
                <Typography>{value}</Typography>
              </Box>
            );
          })}
      {/* <Button onClick={() => navigate("/")} variant="contained">
        Go to dashboard
      </Button> */}
    </Box>
  );
};

export default TripsPage;

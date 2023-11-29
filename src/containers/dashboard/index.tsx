import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Button } from "../../components";

import classes from "./styles.module.scss";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Box className={classes.neoButton}>
        <Button
          onClick={() => navigate("add-trip")}
          variant="contained"
          size="LG_MD_SM"
          text={"Add trip"}
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
        />
      </Box>
      <Box className={classes.neoButton}>
        <Button
          onClick={() => navigate("trips")}
          variant="contained"
          size="LG_MD_SM"
          text={"Trips table"}
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
        />
      </Box>
    </Box>
  );
};

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

import { urls } from "src/utils/constants/common";

import classes from "./styles.module.scss";
import { Button } from "src/components";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const headerText = () => {
    return urls.find((url) => url.url.includes(pathname))?.name;
  };

  return (
    <AppBar className={classes.root}>
      <Box sx={{ width: "40%" }}>
        <IconButton sx={{ color: "#FFF" }} onClick={() => navigate("/")}>
          <Home />
        </IconButton>
        {pathname !== "/" && (
          <Button sx={{ color: "#FFF" }} onClick={() => navigate(-1)} text="Go back" />
        )}
      </Box>
      <Box sx={{ width: "60%" }}>
        <Typography>{headerText()}</Typography>
      </Box>
    </AppBar>
  );
};

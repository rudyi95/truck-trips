import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { urls } from "src/utils/constants/common";

import classes from "./styles.module.scss";

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const headerText = () => {
    return urls.find((url) => url.url.includes(location.pathname))?.name;
  };

  return (
    <AppBar className={classes.root}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      <Typography>{headerText()}</Typography>
    </AppBar>
  );
};

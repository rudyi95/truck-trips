import React, { useEffect, useState } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import moment from "moment";

import { Delete } from "@mui/icons-material";

import classes from "./styles.module.scss";

const TripsPage: React.FC = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("trip");

    setState(!data ? [] : JSON.parse(data));
  }, []);

  return (
    <Box className={classes.root}>
      {!state.length ? (
        <Typography sx={{ margin: "auto" }} variant="h1">
          "No Data"
        </Typography>
      ) : (
        <Box className={classes.tripsList}>
          {state.map((item: ITrip, index: number) => {
            return (
              <Box className={classes.trip}>
                <Typography variant="h1">{index}</Typography>
                <Box className={classes.tripInner}>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                      From - To:
                    </Typography>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {item.startL} - {item.endL}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                      Duration:
                    </Typography>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {moment(item.startD).format("MM/DD/YYYY")} -{" "}
                      {moment(item.endD).format("MM/DD/YYYY")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                        Gross:
                      </Typography>
                      <Typography sx={{ textTransform: "capitalize" }}>{item.gross}</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
                        Miles:
                      </Typography>
                      <Typography sx={{ textTransform: "capitalize" }}>{item.miles}</Typography>
                    </Box>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    if (confirm("Are you sure you want to delete?")) {
                      localStorage.setItem(
                        "trip",
                        JSON.stringify(state.filter((i: ITrip) => i.id !== item.id))
                      );
                      setState(state.filter((i: ITrip) => i.id !== item.id));
                    }
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default TripsPage;

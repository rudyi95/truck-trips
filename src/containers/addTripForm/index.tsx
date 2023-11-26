import React from "react";

import { Box } from "@mui/material";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import { Button, Input } from "src/components";

import classes from "./styles.module.scss";

export const AddTripForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      startL: "",
      endL: "",
      startD: "",
      endD: "",
      gross: 0,
      miles: 0,
    },
    onSubmit: (values, { resetForm }) => {
      const newData = { id: uuidv4(), ...values };
      const currData = localStorage.getItem("trip");

      localStorage.setItem(
        "trip",
        !currData ? JSON.stringify([newData]) : JSON.stringify([...JSON.parse(currData), newData])
      );
      resetForm();
    },
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.formList}>
        <Input
          name="startL"
          label="Start location"
          value={formik.values.startL}
          onChange={formik.handleChange}
        />
        <Input
          name="endL"
          label="End location"
          value={formik.values.endL}
          onChange={formik.handleChange}
        />
        <Input
          name="startD"
          label="Start date"
          value={formik.values.startD}
          onChange={formik.handleChange}
        />
        <Input
          name="endD"
          label="End date"
          value={formik.values.endD}
          onChange={formik.handleChange}
        />
        <Input
          name="gross"
          label="Price(gross)"
          type="number"
          value={formik.values.gross}
          onChange={formik.handleChange}
        />
        <Input
          name="miles"
          label="Miles"
          type="number"
          value={formik.values.miles}
          onChange={formik.handleChange}
        />
      </Box>
      <Button
        text="Add"
        variant="contained"
        onClick={() => formik.handleSubmit()}
        className={classes.button}
      />
    </Box>
  );
};

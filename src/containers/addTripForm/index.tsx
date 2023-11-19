import React from "react";

import { Box } from "@mui/material";
import { useFormik } from "formik";

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
    onSubmit: (values) => {
      sessionStorage.setItem('trip', JSON.stringify(values))
    },
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.formList}>
        <Input name="startL" label="Start location" onChange={formik.handleChange} />
        <Input name="endL" label="End location" onChange={formik.handleChange} />
        <Input name="startD" label="Start date" onChange={formik.handleChange} />
        <Input name="endD" label="End date" onChange={formik.handleChange} />
        <Input name="gross" label="Price(gross)" type="number" onChange={formik.handleChange} />
        <Input name="miles" label="Miles" type="number" onChange={formik.handleChange} />
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

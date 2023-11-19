import { Box, TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface IProps {
  maxLength?: number;
  maxWidth?: number;
}

export const SimpleInput: React.FC<TextFieldProps & IProps> = ({
  maxLength,
  maxWidth,
  ...props
}) => {
  return (
    <Box sx={{ maxWidth }}>
      <TextField
        inputProps={{
          maxLength: maxLength,
        }}
        {...props}
      />
    </Box>
  );
};

import React from "react";

import { Button, ButtonProps } from "@mui/material";

interface IProps {
  text: string | number;
}

export const SimpleButton: React.FC<IProps & ButtonProps> = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};

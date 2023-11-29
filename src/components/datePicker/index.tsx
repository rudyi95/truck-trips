import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface IProps {
  label?: string;
  onAccept?: (value: Nullable<string>) => void;
  value?: Nullable<string>;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
}

export const CustomDatePicker: React.FC<IProps> = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker orientation="portrait" format="dd/MM/yyyy" {...props} />
    </LocalizationProvider>
  );
};

import React from "react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { MintTextField } from "./mint-text-field";
import { styled, useTheme } from "@mui/material";

export type MintDatePickerProps<TDate> = DatePickerProps<TDate>;

export function MintDatePicker<TDate>(props: MintDatePickerProps<TDate>) {
  const theme = useTheme();
  return (
    <StyledMintDateRangePicker
      {...props}
      slots={{
        textField: StyledMintTextField,
        ...props.slots,
      }}
      slotProps={{
        ...props.slotProps,
        day: {
          sx: {
            "&.Mui-selected": {
              backgroundColor: `${theme.mint.color.text.accent} !important`,
            },
          },
          ...props?.slotProps?.day,
        },
      }}
    />
  );
}
const StyledMintDateRangePicker: any = styled(DatePicker)(({ theme }) => ({}));
const StyledMintTextField = (props: any) => {
  return (
    <MintTextField
      {...props}
      sx={{
        "&  .MuiOutlinedInput-root": { padding: "8px 12px " },
      }}
      inputProps={{ style: { padding: 0 } }}
      fullWidth
    />
  );
};

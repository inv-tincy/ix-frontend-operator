import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

export function PlusSvgIcon(props: SvgIconProps) {
  // const classes = usePlusIconStyles();
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className={classes.plusStyles}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10.8333 9.16667V2.5H9.16667V9.16667H2.5V10.8333H9.16667V17.5H10.8333V10.8333H17.5V9.16667H10.8333Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
}

export function NoDataSvgIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M51.5762 56.002V39.002L32.5762 56.002H51.5762Z"
          fill="#F5F5F5"
        />
        <path
          d="M43.5762 19.002H21.5762V21.002H43.5762V19.002Z"
          fill="#D9D9D9"
        />
        <path
          d="M21.5762 29.002H43.5762V31.002H21.5762V29.002Z"
          fill="#D9D9D9"
        />
        <path
          d="M32.5762 40.002H21.5762V42.002H32.5762V40.002Z"
          fill="#D9D9D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5762 9.00195C12.5762 7.89738 13.4716 7.00195 14.5762 7.00195H50.5762C51.6807 7.00195 52.5762 7.89738 52.5762 9.00195V55.002C52.5762 56.1065 51.6807 57.002 50.5762 57.002H14.5762C13.4716 57.002 12.5762 56.1065 12.5762 55.002V9.00195ZM14.5762 9.00195H50.5762V55.002H14.5762V9.00195Z"
          fill="#D9D9D9"
        />
      </svg>
    </SvgIcon>
  );
}

export function DeleteDisabledSvgIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M8.8889 8.33342V15.0001H7.22223L7.22223 8.33342H8.8889Z"
          fill="#0A1826"
          fill-opacity="0.37"
        />
        <path
          d="M12.7778 15.0001V8.33342H11.1111V15.0001H12.7778Z"
          fill="#0A1826"
          fill-opacity="0.37"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.94447 1.66675C6.024 1.66675 5.27781 2.41294 5.27781 3.33341V5.00008H1.66669V6.66675H3.33335L3.33335 16.6662C3.33335 17.5867 4.07955 18.3329 5.00002 18.3329H15C15.9205 18.3329 16.6667 17.5867 16.6667 16.6662V6.66675H18.3334V5.00008H14.7223V3.33341C14.7223 2.41294 13.9761 1.66675 13.0556 1.66675H6.94447ZM13.0556 5.00008V3.33341H6.94447V5.00008H13.0556ZM5.00002 6.66675H15V16.6662H5.00002L5.00002 6.66675Z"
          fill="#0A1826"
          fill-opacity="0.37"
        />
      </svg>
    </SvgIcon>
  );
}

export function CopyIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.66669 3.33341C1.66669 2.41294 2.41288 1.66675 3.33335 1.66675H13.3334C14.2538 1.66675 15 2.41294 15 3.33341V13.3334C15 14.2539 14.2538 15.0001 13.3334 15.0001H3.33335C2.41288 15.0001 1.66669 14.2539 1.66669 13.3334V3.33341ZM3.33335 3.33341H13.3334V13.3334H3.33335V3.33341Z"
          fill="#162987"
        />
        <path
          d="M16.6667 5.83341V15.8334C16.6667 16.2937 16.2936 16.6667 15.8334 16.6667H5.83335V18.3334H16.6667C17.5872 18.3334 18.3334 17.5872 18.3334 16.6667V5.83341H16.6667Z"
          fill="#162987"
        />
      </svg>
    </SvgIcon>
  );
}

export function DeleteSvgIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M8.8889 8.33342V15.0001H7.22223L7.22223 8.33342H8.8889Z"
          fill="#DB2352"
        />
        <path
          d="M12.7778 15.0001V8.33342H11.1111V15.0001H12.7778Z"
          fill="#DB2352"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.94447 1.66675C6.024 1.66675 5.27781 2.41294 5.27781 3.33341V5.00008H1.66669V6.66675H3.33335L3.33335 16.6662C3.33335 17.5867 4.07955 18.3329 5.00002 18.3329H15C15.9205 18.3329 16.6667 17.5867 16.6667 16.6662V6.66675H18.3334V5.00008H14.7223V3.33341C14.7223 2.41294 13.9761 1.66675 13.0556 1.66675H6.94447ZM13.0556 5.00008V3.33341H6.94447V5.00008H13.0556ZM5.00002 6.66675H15V16.6662H5.00002L5.00002 6.66675Z"
          fill="#DB2352"
        />
      </svg>
    </SvgIcon>
  );
}


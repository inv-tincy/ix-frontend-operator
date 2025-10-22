import React from "react";
import { IconProps } from "./IconProps";

export function InformationOutlinedIcon(props: IconProps) {
  const size = props.size || 24;
  const color = props.color || "#0A1826";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <path
        d="M10.8337 9.16675V15.0001H9.16699V9.16675H10.8337Z"
        fill={color}
      />
      <path
        d="M10.0003 7.50008C10.6907 7.50008 11.2503 6.94044 11.2503 6.25008C11.2503 5.55973 10.6907 5.00008 10.0003 5.00008C9.30997 5.00008 8.75033 5.55973 8.75033 6.25008C8.75033 6.94044 9.30997 7.50008 10.0003 7.50008Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334ZM10.0003 16.6667C13.6822 16.6667 16.667 13.682 16.667 10.0001C16.667 6.31818 13.6822 3.33341 10.0003 3.33341C6.31843 3.33341 3.33366 6.31818 3.33366 10.0001C3.33366 13.682 6.31843 16.6667 10.0003 16.6667Z"
        fill={color}
      />
    </svg>
  );
}

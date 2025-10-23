import React from "react";
import { IconProps } from "./IconProps";

export function PencilIconContained(props: IconProps) {
  const size = props.size || 16;
  const color = props.color || "white";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.36391 11.8267C1.37085 11.4815 1.51136 11.1523 1.75603 10.9082L10.9585 1.7246C11.4817 1.20248 12.33 1.20248 12.8531 1.7246L14.2749 3.14345C14.7978 3.66526 14.7982 4.51117 14.2757 5.03341L5.05801 14.2476C4.81274 14.4928 4.48166 14.6333 4.13456 14.6397L2.69837 14.6661C1.93839 14.6801 1.31902 14.061 1.33426 13.3026L1.36391 11.8267ZM10.9663 3.60753L11.9058 2.66997L13.3276 4.08882L12.3889 5.02717L10.9663 3.60753ZM10.019 4.55291L2.70336 11.8535L2.67371 13.3294L4.1099 13.303L11.4424 5.97333L10.019 4.55291Z"
        fill={color}
      />
    </svg>
  );
}

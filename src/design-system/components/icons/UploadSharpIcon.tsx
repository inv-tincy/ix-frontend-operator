import React from "react";
import { IconProps } from "./IconProps";

export function UploadSharpIcon(props: IconProps) {
  const size = props.size || 24;
  const color = props.color || "#162987";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.4142 3.58634L19.4142 9.58634L18 11.0006L13 6.00055L13.0002 18H11.0002L11 6.00055L6.00001 11.0006L4.58579 9.58634L10.5858 3.58634C11.3668 2.80529 12.6332 2.80529 13.4142 3.58634Z"
        fill={color}
      />
      <path d="M21 20H3V22H21V20Z" fill={color} />
    </svg>
  );
}

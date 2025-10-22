import React from 'react';
import { IconProps } from './IconProps';

export function DownloadIcon(props: IconProps) {
  const size = props.size || 16; 
  const color = props.color || '#162987'; 

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} 
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.94281 11.6091L12.9428 7.60912L12 6.66631L8.66667 9.99964L8.66677 2H7.33344L7.33334 9.99964L4.00001 6.66631L3.0572 7.60912L7.05719 11.6091C7.57789 12.1298 8.42211 12.1298 8.94281 11.6091Z"
        fill={color} 
      />
      <path
        d="M14 13.3333H2V14.6667H14V13.3333Z"
        fill={color} 
      />
    </svg>
  );
}

import React from "react";

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M19 10.79A9 9 0 119.21 1 7 7 0 0019 10.79z"
        stroke="#28292C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

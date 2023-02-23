import * as React from "react";

export const DiscordCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx={20} cy={20} r={20} className="fill-black dark:fill-white" />
      <g clipPath="url(#prefix__clip0_809_7316)">
        <path
          d="M26.248 14.089A15.435 15.435 0 0022.534 13a9.53 9.53 0 00-.476.921 14.51 14.51 0 00-4.12 0 9.598 9.598 0 00-.476-.921 15.542 15.542 0 00-3.717 1.091c-2.35 3.314-2.987 6.545-2.669 9.73A15.27 15.27 0 0015.631 26c.369-.473.695-.974.975-1.499a9.894 9.894 0 01-1.536-.699c.13-.089.255-.18.377-.27 1.424.639 2.979.97 4.553.97 1.574 0 3.129-.331 4.553-.97.123.096.25.188.377.27-.49.276-1.006.51-1.54.7.28.525.607 1.026.976 1.498a15.2 15.2 0 004.558-2.177c.373-3.694-.639-6.896-2.676-9.734zm-9.238 7.773c-.888 0-1.621-.767-1.621-1.712 0-.944.708-1.718 1.618-1.718.91 0 1.638.774 1.622 1.718-.015.945-.714 1.712-1.62 1.712zm5.98 0c-.889 0-1.62-.767-1.62-1.712 0-.944.708-1.718 1.62-1.718.912 0 1.634.774 1.618 1.718-.015.945-.713 1.712-1.618 1.712z"
          className="fill-white dark:fill-black"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_809_7316">
          <path
            className="fill-white dark:fill-black"
            transform="translate(11 13)"
            d="M0 0h18v13H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

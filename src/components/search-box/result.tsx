import clsx from "clsx";
import { DocResult } from "./types";

const Arrow = () => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 13L7 7L1 1"
      className="stroke-current"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Result = ({
  result,
  selected,
  active,
}: {
  result: DocResult;
  selected: boolean;
  active: boolean;
}) => {
  return (
    <div
      className={clsx(
        "bg-g-50 rounded-[8px] px-16 py-12 typography-paragraph-2 text-g-900",
        "flex items-center justify-between",
        {
          "bg-strawberry text-white selected": active || selected,
        }
      )}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: result.html,
        }}
      />
      <Arrow />
    </div>
  );
};

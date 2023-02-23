import clsx from "clsx";

export const Spacer = ({ size = 128 }: { size?: 128 | 80 }) => {
  return (
    <div
      className={clsx({
        "h-80": size === 80,
        "h-[128px]": size === 128,
      })}
    />
  );
};

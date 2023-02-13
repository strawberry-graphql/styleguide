import clsx from "clsx";

export const Label = ({
  children,
  variant = "regular",
}: {
  children: React.ReactNode;
  variant?: "regular" | "small";
}) => {
  return (
    <span
      className={clsx("font-bold", {
        "text-label-2": variant === "small",
        "text-label": variant === "regular",
      })}
    >
      {children}
    </span>
  );
};

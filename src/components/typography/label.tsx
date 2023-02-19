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
      className={clsx({
        "typography-label-2": variant === "small",
        "typography-label": variant === "regular",
      })}
    >
      {children}
    </span>
  );
};

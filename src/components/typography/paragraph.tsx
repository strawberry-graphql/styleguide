import clsx from "clsx";

export const Paragraph = ({
  children,
  variant = "regular",
}: {
  children: React.ReactNode;
  variant?: "small" | "regular";
}) => {
  return (
    <p
      className={clsx("font-display", {
        "text-paragraph-s md:text-paragraph": variant === "regular",
        "text-paragraph-2 md:text-paragraph-2": variant === "small",
      })}
    >
      {children}
    </p>
  );
};

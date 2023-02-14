import clsx from "clsx";

export const Paragraph = ({
  children,
  variant = "regular",
  as = "p",
  ...props
}: {
  children: React.ReactNode;
  variant?: "small" | "regular";
  as?: "p" | "a";
}) => {
  const Component = as;

  return (
    <Component
      className={clsx("font-sans", {
        "text-paragraph-s md:text-paragraph": variant === "regular",
        "text-paragraph-2 md:text-paragraph-2": variant === "small",
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

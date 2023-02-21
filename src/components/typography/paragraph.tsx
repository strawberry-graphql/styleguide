import clsx from "clsx";

export const Paragraph = ({
  children,
  variant = "regular",
  bold = false,
  as = "p",
  ...props
}: {
  children: React.ReactNode;
  variant?: "small" | "regular";
  as?: "p" | "a";
  bold?: boolean;
}) => {
  const Component = as;

  return (
    <Component
      className={clsx({
        "typography-paragraph": variant === "regular",
        "typography-paragraph-2": variant === "small",
        "font-bold": bold,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

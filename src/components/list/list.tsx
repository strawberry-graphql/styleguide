import clsx from "clsx";

export const ListItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <li className={clsx("mb-2", className)}>{children}</li>;
};

export const List = ({
  variant = "unordered",
  children,
  className,
}: {
  variant?: "unordered" | "ordered";
  children: React.ReactNode;
  className?: string;
}) => {
  const Tag = variant === "unordered" ? "ul" : "ol";

  return (
    <Tag
      className={clsx("list-disc list-inside typography-paragraph", className)}
    >
      {children}
    </Tag>
  );
};

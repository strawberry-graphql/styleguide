import clsx from "clsx";

export const Heading = ({
  children,
  className,
  level = 1,
}: {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        {
          "typography-heading-1": level === 1,
          "typography-heading-2": level === 2,
          "typography-heading-3": level === 3,
          "typography-heading-4": level === 4,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

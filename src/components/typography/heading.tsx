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
        "font-bold font-display",
        {
          "text-heading-1-s md:text-heading-1": level === 1,
          "text-heading-2-s md:text-heading-2": level === 2,
          "text-heading-3": level === 3,
          "text-heading-4": level === 4,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

import clsx from "clsx";

export const Caption = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={clsx("font-caption text-caption font-bold", className)}>
      {children}
    </p>
  );
};

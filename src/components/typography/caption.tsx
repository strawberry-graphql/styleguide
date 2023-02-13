import clsx from "clsx";

export const Caption = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <p className={clsx("font-sans text-caption", className)} style={style}>
      {children}
    </p>
  );
};

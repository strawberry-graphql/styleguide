import clsx from "clsx";

export const Display = ({
  children,
  forceSmall,
}: {
  children: React.ReactNode;
  forceSmall: boolean;
}) => {
  return (
    <h1
      className={clsx("font-bold font-display text-display-s", {
        "md:text-display": !forceSmall,
      })}
    >
      {children}
    </h1>
  );
};

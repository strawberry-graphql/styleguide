import clsx from "clsx";

export const Codebox = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "text-white border-transparency-light dark:border-g-900 bg-g-900 dark:bg-transparency-dark",
        "codebox border rounded-[12px]"
      )}
    >
      <pre {...props}>{children}</pre>
    </div>
  );
};

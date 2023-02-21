import clsx from "clsx";

export const Codebox = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <pre
      className={clsx(
        "text-white border-transparency-light dark:border-g-900 bg-g-900 dark:bg-transparency-dark",
        "px-48 py-32 border rounded-[12px]"
      )}
      {...props}
    >
      <code>{children}</code>
    </pre>
  );
};

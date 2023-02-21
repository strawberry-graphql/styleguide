import clsx from "clsx";

export const Codebox = ({ html, ...props }: { html: string }) => {
  return (
    <div
      className={clsx(
        "text-white border-transparency-light dark:border-g-900 bg-g-900 dark:bg-transparency-dark",
        "px-48 py-32 border rounded-[12px]"
      )}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

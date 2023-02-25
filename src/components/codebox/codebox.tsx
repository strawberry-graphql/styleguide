import clsx from "clsx";

// TODO: find a way to keep the padding right when scrolling
export const Codebox = ({ html, ...props }: { html: string }) => {
  return (
    <div
      className={clsx(
        "text-white border-transparency-light dark:border-g-900 bg-g-900 dark:bg-transparency-dark",
        "codebox border rounded-[12px]"
      )}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

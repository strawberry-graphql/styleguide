import clsx from "clsx";

export const Button = ({
  children,
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={clsx(
        "px-[20px] py-12 text-white",
        "md:px-32 md:py-16 text-white",
        "typography-label rounded-[30px]",
        {
          "bg-gradient-to-r from-magenta to-orange hover:from-orange hover:to-magenta":
            !disabled,
          "bg-g-50 text-g-400 cursor-not-allowed": disabled,
          "dark:bg-g-900 dark:text-g-700": disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

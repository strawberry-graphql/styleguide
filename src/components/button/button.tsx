import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  as?: "button" | "a";
} & (
  | {
      as: "button";
      onClick: () => void;
    }
  | {
      as: "a";
      href: string;
    }
);
export const Button = ({
  children,
  disabled = false,
  as: Component = "button",
  ...props
}: Props) => {
  return (
    <Component
      className={clsx(
        "inline-block px-[20px] py-12 text-white",
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
    </Component>
  );
};

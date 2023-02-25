import clsx from "clsx";

export const BaseInput = ({
  type,
  id,
  placeholder,
  value,
  name,
  onChange,
  required,
  disabled,
  className,
}: {
  name?: string;
  id?: string;
  type: "text" | "email" | "search" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  success?: string;
}) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    required={required}
    disabled={disabled}
    className={clsx(
      "border-[1.5px] border-g-100 dark:border-g-900 rounded-[30px] px-24 py-12 typography-paragraph-2",
      "placeholder:text-g-500 text-g-700 dark:text-g-50 disabled:text-g-400",
      "bg-transparent input-border outline-none",
      "w-full",
      className
    )}
  />
);

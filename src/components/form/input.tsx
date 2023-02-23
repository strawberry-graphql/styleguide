import clsx from "clsx";
import { AlertIcon } from "../icons/alert";
import { CheckIcon } from "../icons/check";
import { Caption } from "../typography/caption";

export const Input = ({
  name,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  disabled,
  className,
  icon,
  success,
  ...props
}: {
  name?: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  success?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div>
      <div className="relative inline-block">
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
            "border-[1.5px] border-g-100 rounded-[30px] px-12 py-[6px]",
            "placeholder:text-g-500 text-g-700 disabled:text-g-400",
            "hover:gradient-border focus:gradient-border outline-none",
            {
              "border-strawberry": error,
              "border-green": success,
            }
          )}
          {...props}
        />

        {icon && (
          <div className="absolute top-0 right-0 h-full flex items-center px-12 text-g-500">
            {icon}
          </div>
        )}
      </div>

      {error && (
        <div className="mt-8 text-strawberry flex items-center">
          <AlertIcon className="w-12 h-12 mr-8" />
          <Caption>{error}</Caption>
        </div>
      )}

      {success && (
        <div className="mt-8 text-green flex items-center">
          <CheckIcon className="w-[10px] h-[7px] mr-8" />
          <Caption>{success}</Caption>
        </div>
      )}
    </div>
  );
};

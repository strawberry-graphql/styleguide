import clsx from "clsx";
import { AlertIcon } from "../icons/alert";
import { CheckIcon } from "../icons/check";
import { SearchIcon } from "../icons/search";
import { Caption } from "../typography/caption";
import { BaseInput } from "./base-input";
import { ErrorLabel, SuccessLabel } from "./labels";

export const SearchInput = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  onClick,
  error,
  required,
  disabled,
  className,
  success,
  onFocus,
  ...props
}: {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  success?: string;
  onFocus?: (e: any) => void;
}) => {
  return (
    <div className={className}>
      <div className="relative inline-block w-full">
        <div
          onClick={onClick}
          className={clsx(
            "border-[1.5px] border-g-100 dark:border-g-900 rounded-[30px] px-24 py-12 typography-paragraph-2",
            "placeholder:text-g-500 text-g-700 dark:text-g-50 disabled:text-g-400",
            "bg-transparent input-border outline-none",
            "w-full cursor-pointer pl-48",
            {
              "border-strawberry": error,
              "border-green": success,
            }
          )}
        >
          {placeholder}

          <div className="absolute top-0 left-4 h-full flex items-center px-12 text-g-500">
            <SearchIcon />
          </div>
        </div>
      </div>

      {error && <ErrorLabel>{error}</ErrorLabel>}
      {success && <SuccessLabel>{success}</SuccessLabel>}
    </div>
  );
};

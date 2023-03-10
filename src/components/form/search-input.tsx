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
        <BaseInput
          type="search"
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onFocus={onFocus}
          className={clsx("pl-48", {
            "border-strawberry": error,
            "border-green": success,
          })}
        />

        <div className="absolute top-0 left-4 h-full flex items-center px-12 text-g-500">
          <SearchIcon />
        </div>
      </div>

      {error && <ErrorLabel>{error}</ErrorLabel>}
      {success && <SuccessLabel>{success}</SuccessLabel>}
    </div>
  );
};

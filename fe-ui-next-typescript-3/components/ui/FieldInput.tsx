import { FieldInputProps } from "@/interface";
import clsx from "clsx";

export default function FieldInput({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  className,
}: FieldInputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className={clsx(
        "border p-2 rounded w-full",
        {
          "opacity-50 cursor-not-allowed": disabled,
        },
        className,
      )}
    />
  );
}

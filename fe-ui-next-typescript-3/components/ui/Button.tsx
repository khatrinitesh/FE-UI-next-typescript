import { ButtonProps } from "@/interface";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "cursor-pointer px-4 py-2 rounded flex items-center gap-2",
        {
          "bg-blue-500 text-white": variant === "primary",
          "bg-gray-300 text-black": variant === "secondary",
          "opacity-50 cursor-not-allowed": disabled,
        },
        className,
      )}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

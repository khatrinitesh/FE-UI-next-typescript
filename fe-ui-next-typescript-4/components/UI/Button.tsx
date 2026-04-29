import clsx from "clsx";

export default function Button({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
}: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded flex items-center gap-2",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-300",
        className,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

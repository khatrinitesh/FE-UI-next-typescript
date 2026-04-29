export default function FieldInput({
  value,
  onChange,
  maxLength,
  disabled,
}: any) {
  return (
    <input
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      disabled={disabled}
      className="border p-2 w-full"
    />
  );
}

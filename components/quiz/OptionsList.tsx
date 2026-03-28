"use client";

export default function OptionsList({
  options,
  onSelect,
  disabled = false,
}: {
  options: string[];
  onSelect: (opt: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="grid gap-3 mt-5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => !disabled && onSelect(opt)}
          disabled={disabled}
          className={`p-3 rounded-lg border ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
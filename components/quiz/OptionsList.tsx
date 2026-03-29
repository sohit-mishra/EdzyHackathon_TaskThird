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
  const handleKeyDown = (e: React.KeyboardEvent, opt: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) {
        onSelect(opt);
      }
    }
  };

  return (
    <div 
      className="grid gap-3 mt-5"
      role="radiogroup"
      aria-label="Quiz answer options"
    >
      {options.map((opt, index) => (
        <button
          key={opt}
          onClick={() => !disabled && onSelect(opt)}
          onKeyDown={(e) => handleKeyDown(e, opt)}
          disabled={disabled}
          className={`p-3 rounded-lg border text-left transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          role="radio"
          aria-label={`Option ${index + 1}: ${opt}`}
          aria-checked={false}
          tabIndex={disabled ? -1 : 0}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
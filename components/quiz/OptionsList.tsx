"use client";

import { Check } from "lucide-react";

export default function OptionsList({
  options,
  onSelect,
  disabled = false,
  selectedAnswer,
  correctAnswer,
}: {
  options: string[];
  onSelect: (opt: string) => void;
  disabled?: boolean;
  selectedAnswer?: string;
  correctAnswer?: string;
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
      className="flex flex-col gap-4 mt-6"
      role="radiogroup"
      aria-label="Quiz answer options"
    >
      {options.map((opt, index) => {
        const isSelected = selectedAnswer === opt;
        const isCorrect = correctAnswer === opt;
        const isWrong = isSelected && !isCorrect && selectedAnswer !== undefined;
        
        return (
          <button
            key={index}
            onClick={() => !disabled && onSelect(opt)}
            onKeyDown={(e) => handleKeyDown(e, opt)}
            disabled={disabled}
            className={`flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isCorrect && selectedAnswer
                ? "border-green-500 bg-green-50"
                : isWrong
                ? "border-red-500 bg-red-50"
                : !disabled
                ? "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                : "border-gray-200 opacity-50 cursor-not-allowed"
            }`}
            role="radio"
            aria-label={`Option ${index + 1}: ${opt}`}
            aria-checked={isSelected}
            tabIndex={disabled ? -1 : 0}
          >
            <span className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg flex-shrink-0 ${
              isCorrect && selectedAnswer
                ? "bg-green-500 text-white"
                : isWrong
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
              {index + 1}
            </span>
            <span className="flex-1 text-gray-900 font-medium">{opt}</span>
            {isCorrect && selectedAnswer && (
              <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
            )}
          </button>
        );
      })}
    </div>
  );
}
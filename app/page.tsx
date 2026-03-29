"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SUBJECTS = [
  "Class 10 - English",
  "Class 10 - Mathematics",
  "Class 10 - Science",
  "Class 10 - Social Science",
];

const QUESTION_COUNTS = [5, 10, 15] as const;
type QuestionCount = typeof QUESTION_COUNTS[number];

export default function Home() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [count, setCount] = useState<QuestionCount>(5);
  const [errors, setErrors] = useState<{ subject?: string; count?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!subject || subject === "Select Subject") {
      newErrors.subject = "Please select a subject";
    }

    if (!QUESTION_COUNTS.includes(count)) {
      newErrors.count = "Please select a valid number of questions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const start = () => {
    if (validateForm()) {
      router.push(`/quiz?subject=${encodeURIComponent(subject)}&count=${count}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Start Quiz</h1>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Select Subject
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setErrors((prev) => ({ ...prev, subject: "" }));
            }}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            aria-label="Quiz subject"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            <option value="">Select Subject</option>
            {SUBJECTS.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="text-sm text-red-500 mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="question-count" className="block text-sm font-medium text-gray-700">
            Number of Questions
          </label>
          <select
            id="question-count"
            value={count}
            onChange={(e) => {
              const value = Number(e.target.value) as QuestionCount;
              setCount(value);
              setErrors((prev) => ({ ...prev, count: "" }));
            }}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.count ? "border-red-500" : "border-gray-300"
            }`}
            aria-label="Number of quiz questions"
            aria-invalid={!!errors.count}
            aria-describedby={errors.count ? "count-error" : undefined}
          >
            {QUESTION_COUNTS.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.count && (
            <p id="count-error" className="text-sm text-red-500 mt-1">
              {errors.count}
            </p>
          )}
        </div>

        <button
          onClick={start}
          disabled={!subject || !count}
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            subject && count
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          aria-label="Start quiz button"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
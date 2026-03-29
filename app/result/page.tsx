"use client";

import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quiz.store";

export default function ResultPage() {
  const router = useRouter();
  const { score, wrongAttempts, questions, resetQuiz } = useQuizStore();

  const handleRestart = () => {
    resetQuiz();
    router.push("/");
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Quiz Completed!
        </h1>

        <div className="space-y-4">
          {/* Score Card */}
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm mb-2">Your Score</p>
            <p className="text-4xl font-bold text-green-700">
              {score}/{questions.length}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {percentage}% Correct
            </p>
          </div>

          {/* Wrong Attempts Card */}
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
            <p className="text-gray-600 text-sm mb-2">Wrong Attempts</p>
            <p className="text-3xl font-bold text-orange-700">
              {wrongAttempts}
            </p>
          </div>

          {/* Performance Message */}
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-gray-700 font-medium">
              {percentage >= 80
                ? "Excellent work! You're a quiz master! 🎉"
                : percentage >= 60
                ? "Good job! Keep practicing to improve. 👍"
                : "Keep learning! Practice makes perfect. 📚"}
            </p>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Take another quiz"
        >
          Take Another Quiz
        </button>
      </div>
    </div>
  );
}
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

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
      <p className="text-lg mb-2">Score: {score} / {questions.length}</p>
      <p className="text-lg mb-4">Wrong Attempts: {wrongAttempts}</p>
      <button onClick={handleRestart} className="px-4 py-2 bg-blue-500 text-white rounded">
        Take Another Quiz
      </button>
    </div>
  );
}
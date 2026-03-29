"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";
import { useQuizStore } from "@/store/quiz.store";
import QuestionCard from "@/components/quiz/QuestionCard";
import OptionsList from "@/components/quiz/OptionsList";
import ProgressBar from "@/components/quiz/ProgressBar";
import Feedback from "@/components/quiz/Feedback";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";

export default function QuizPageContent() {
  const params = useSearchParams();
  const router = useRouter();

  const subject = params.get("subject")!;
  const count = Number(params.get("count"));

  const { data, isLoading, error } = useQuiz(subject, count);

  const {
    questions,
    setQuestions,
    currentIndex,
    nextQuestion,
    incrementScore,
    incrementWrong,
  } = useQuizStore();

  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  // Initialize questions when data is loaded
  useEffect(() => {
    if (data && questions.length === 0) {
      setQuestions(data.questions);
    }
  }, [data, questions.length, setQuestions]);

  // Redirect when quiz is complete
  useEffect(() => {
    if (questions.length > 0 && currentIndex >= questions.length) {
      router.push("/result");
    }
  }, [questions.length, currentIndex, router]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <ErrorState 
        message="Failed to load quiz questions. Please check your connection and try again from the home page."
      />
    );
  }

  const q = questions[currentIndex];

  if (!q) {
    return null;
  }

  const handle = (opt: string) => {
    if (opt === q.correctAnswer) {
      incrementScore();
      setFeedback("correct");
    } else {
      incrementWrong();
      setFeedback("wrong");
    }
    setTimeout(() => {
      setFeedback(null);
      nextQuestion();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 sr-only">Quiz</h1>
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </header>

        <main className="space-y-6">
          <QuestionCard question={q.question} />
          <OptionsList options={q.options} onSelect={handle} disabled={!!feedback} />
          <Feedback type={feedback} />
        </main>
      </div>
    </div>
  );
}

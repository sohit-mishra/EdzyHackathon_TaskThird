"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";
import { useQuizStore } from "@/store/quiz.store";
import QuestionCard from "@/components/quiz/QuestionCard";
import OptionsList from "@/components/quiz/OptionsList";
import ProgressBar from "@/components/quiz/ProgressBar";
import Feedback from "@/components/quiz/Feedback";
import Loader from "@/components/common/Loader";

export default function QuizPage() {
  const params = useSearchParams();
  const router = useRouter();

  const subject = params.get("subject")!;
  const count = Number(params.get("count"));

  const { data, isLoading } = useQuiz(subject, count);

  const {
    questions,
    setQuestions,
    currentIndex,
    nextQuestion,
    incrementScore,
    incrementWrong,
  } = useQuizStore();

  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  if (isLoading) return <Loader />;

  if (data && questions.length === 0) {
    setQuestions(data.questions);
  }

  const q = questions[currentIndex];

  if (!q) {
    router.push("/result");
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
    <div className="p-10">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard question={q.question} />
      <OptionsList options={q.options} onSelect={handle} disabled={!!feedback} />
      <Feedback type={feedback} />
    </div>
  );
}
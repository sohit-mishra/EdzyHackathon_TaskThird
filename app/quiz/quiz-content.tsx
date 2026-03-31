"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, Heart, MoreVertical, Clock } from "lucide-react";
import { useQuiz } from "@/hooks/useQuiz";
import { useQuizStore } from "@/store/quiz.store";
import QuestionCard from "@/components/quiz/QuestionCard";
import OptionsList from "@/components/quiz/OptionsList";
import ProgressBar from "@/components/quiz/ProgressBar";
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

  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const [showSolution, setShowSolution] = useState(false);
  const [time, setTime] = useState(0);
  const totalTime = 46;
  const hasAutoAdvanced = useRef(false);

  // Initialize questions
  useEffect(() => {
    if (data && questions.length === 0) {
      setQuestions(data.questions, data.examSubjectName);
    }
  }, [data, questions.length, setQuestions]);

  // Redirect when quiz ends
  useEffect(() => {
    if (questions.length > 0 && currentIndex >= questions.length) {
      router.push("/result");
    }
  }, [questions.length, currentIndex, router]);

  // Timer (runs continuously)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Reset state when question changes ✅ IMPORTANT FIX
  useEffect(() => {
    setTime(0);
    setSelectedAnswer(undefined);
    setShowSolution(false);
    hasAutoAdvanced.current = false;
  }, [currentIndex]);

  // Auto-advance when time ends ✅
  useEffect(() => {
    if (
      time >= totalTime &&
      questions.length > 0 &&
      !hasAutoAdvanced.current
    ) {
      hasAutoAdvanced.current = true;

      if (!selectedAnswer) {
        incrementWrong();
      }

      nextQuestion(); // direct call (cleaner)
    }
  }, [
    time,
    totalTime,
    questions.length,
    selectedAnswer,
    incrementWrong,
    nextQuestion,
  ]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <ErrorState message="Failed to load quiz questions. Please check your connection and try again." />
    );
  }

  const q = questions[currentIndex];
  if (!q) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (opt: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(opt);

    if (opt === q.correctAnswer) {
      incrementScore();
    } else {
      incrementWrong();
    }
  };

  const handleNext = () => {
    nextQuestion();
  };

  return (
    <div key={currentIndex} className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-gray-600">∞</span>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="More options"
            >
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto p-4 pb-40">
        <div className="max-w-2xl mx-auto">
          <QuestionCard question={q.question} />
          <OptionsList
            options={q.options}
            onSelect={handleAnswerSelect}
            disabled={!!selectedAnswer}
            selectedAnswer={selectedAnswer}
            correctAnswer={q.correctAnswer}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <div className="max-w-2xl mx-auto w-full">
          {showSolution && q.solution && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">
                Solution:
              </p>
              <p className="text-sm text-blue-800">{q.solution}</p>
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setShowSolution((prev) => !prev)}
              disabled={!selectedAnswer}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition px-3 py-2 whitespace-nowrap"
            >
              Solution
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-600 flex-1 justify-center whitespace-nowrap">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>
                {formatTime(time)} / {formatTime(totalTime)}
              </span>
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`px-6 py-2 rounded-lg font-semibold text-white transition whitespace-nowrap ${
                selectedAnswer
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
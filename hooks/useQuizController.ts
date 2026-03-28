"use client";

import { useQuizStore } from "@/store/quiz.store";

/**
 * Quiz Controller Hook
 * Handles:
 * - current question
 * - answer validation
 * - navigation (next)
 * - completion state
 */
export const useQuizController = () => {
  const {
    questions,
    currentIndex,
    incrementScore,
    incrementWrong,
    nextQuestion,
  } = useQuizStore();

  const currentQuestion = questions[currentIndex];

  /**
   * Handle Answer Selection
   */
  const handleAnswer = (selectedOption: string) => {
    if (!currentQuestion) return "idle";

    if (selectedOption === currentQuestion.correctAnswer) {
      incrementScore();
      nextQuestion();
      return "correct";
    } else {
      incrementWrong();
      return "wrong";
    }
  };

  /**
   * Derived States
   */
  const totalQuestions = questions.length;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isFinished = currentIndex >= totalQuestions;

  return {
    // Data
    currentQuestion,
    currentIndex,
    totalQuestions,

    // Actions
    handleAnswer,

    // Flags
    isFirstQuestion,
    isLastQuestion,
    isFinished,
  };
};
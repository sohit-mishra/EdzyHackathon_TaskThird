import { create } from "zustand";
import { QuizQuestion } from "@/types/quiz.types";

interface QuizStore {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  wrongAttempts: number;

  setQuestions: (questions: QuizQuestion[]) => void;
  nextQuestion: () => void;
  incrementScore: () => void;
  incrementWrong: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  currentIndex: 0,
  score: 0,
  wrongAttempts: 0,

  setQuestions: (questions) => set({ questions }),

  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    })),

  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),

  incrementWrong: () =>
    set((state) => ({
      wrongAttempts: state.wrongAttempts + 1,
    })),

  resetQuiz: () =>
    set({
      questions: [],
      currentIndex: 0,
      score: 0,
      wrongAttempts: 0,
    }),
}));
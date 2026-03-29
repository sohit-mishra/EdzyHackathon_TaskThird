import { useEffect } from "react";
import { useQuizStore } from "@/store/quiz.store";
import { QuizResponse } from "@/types/quiz.types";

export const useInitializeQuiz = (data?: QuizResponse) => {
  const { questions, setQuestions } = useQuizStore();

  useEffect(() => {
    if (data?.questions && questions.length === 0) {
      setQuestions(data.questions, data.examSubjectName);
    }
  }, [data, questions.length, setQuestions]);
};
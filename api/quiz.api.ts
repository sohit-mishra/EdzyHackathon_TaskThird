import { api } from "./axios";
import { QuizResponse } from "@/types/quiz.types";

export const fetchQuiz = async (
  subject: string,
  count: number
): Promise<QuizResponse> => {
  const res = await api.post("/task-1/quizDetails", {
    examSubjectName: subject,
    numberOfQuestions: count,
  });
  return res.data;
};
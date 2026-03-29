import { api } from "./axios";
import { QuizResponse, QuizQuestion } from "@/types/quiz.types";
import { ApiQuizDetailsResponse } from "@/types/api.types";

export const fetchQuiz = async (
  subject: string,
  count: number
): Promise<QuizResponse> => {
  const res = await api.post<ApiQuizDetailsResponse>("/task/quizDetails", {
    examSubjectName: subject,
    numberOfQuestions: count,
  });

  const apiData = res.data.data;

  // Transform API response to application format
  const transformedQuestions: QuizQuestion[] = apiData.questions.map((q) => {
    // Find the correct option text by matching the option ID
    const correctOptionId = q.questionInfo.option;
    const correctOptionText = q.optionOrdering.find(
      (opt) => opt._id === correctOptionId
    )?.text || "";

    return {
      id: q._id,
      question: q.text,
      options: q.optionOrdering.map((opt) => opt.text),
      correctAnswer: correctOptionText,
      chapter: q.examSubjectBookChapter.title,
      solution: q.questionInfo.solution,
    };
  });

  return {
    examSubjectName: apiData.examSubject.title,
    numberOfQuestions: apiData.questions.length,
    questions: transformedQuestions,
  };
};
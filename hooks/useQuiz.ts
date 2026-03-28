import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "@/api/quiz.api";
import { QuizResponse } from "@/types/quiz.types";

export const useQuiz = (
  subject: string,
  count: number
) => {
  return useQuery<QuizResponse>({
    queryKey: ["quiz", subject, count],
    queryFn: () => fetchQuiz(subject, count),
    enabled: !!subject && !!count,
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
};
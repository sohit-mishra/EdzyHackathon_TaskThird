import { useQuery } from "@tanstack/react-query";
import { fetchQuiz } from "@/api/quiz.api";
import { quizKeys } from "@/lib/queryKeys";
import { QuizResponse } from "@/types/quiz.types";

/**
 * Quiz Service Hook (React Query Wrapper)
 */
export const useQuizService = (
  subject: string,
  count: number
) => {
  return useQuery<QuizResponse>({
    queryKey: quizKeys.detail(subject, count),
    queryFn: () => fetchQuiz(subject, count),
    enabled: !!subject && !!count,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: 2,
  });
};
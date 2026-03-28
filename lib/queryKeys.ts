export const quizKeys = {
  all: ["quiz"] as const,
  detail: (subject: string, count: number) =>
    [...quizKeys.all, subject, count] as const,
};
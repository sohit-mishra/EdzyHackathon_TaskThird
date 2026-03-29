/**
 * Single Question Type (Transformed)
 */
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
  solution: string;
}

/**
 * Quiz Response Type (Transformed)
 */
export interface QuizResponse {
  examSubjectName: string;
  numberOfQuestions: number;
  questions: QuizQuestion[];
}
/**
 * Single Question Type
 */
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

/**
 * API Response Type
 */
export interface QuizResponse {
  questions: QuizQuestion[];
}
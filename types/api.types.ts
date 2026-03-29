/**
 * Generic API Response Wrapper (optional)
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Raw API Response Types (from backend)
 */
export interface ApiOption {
  _id: string;
  text: string;
  media: string | null;
}

export interface ApiQuestionInfo {
  _id: string;
  question: string;
  solution: string;
  media: string | null;
  option: string; // ID of correct option
}

export interface ApiQuestion {
  _id: string;
  examSubjectBookChapter: {
    _id: string;
    title: string;
  };
  text: string;
  type: string;
  media: string | null;
  optionOrdering: ApiOption[];
  exam: {
    _id: string;
    seoTitle: string;
  };
  examSubject: {
    _id: string;
    title: string;
  };
  examSubjectBook: {
    _id: string;
    title: string;
  };
  questionInfo: ApiQuestionInfo;
}

export interface ApiQuizDetailsResponse {
  status: number;
  success: boolean;
  error: string | null;
  message: string;
  data: {
    examSubject: {
      _id: string;
      title: string;
    };
    questions: ApiQuestion[];
  };
}
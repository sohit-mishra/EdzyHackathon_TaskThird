/**
 * Generic API Response Wrapper (optional)
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
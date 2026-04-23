export interface ApiError {
  message: string | string[];
  error: string;
  statusCode: number;
}

export interface ApiSuccess<T> {
  message: string;
  data?: T;
}
export interface ApiResponse<T> {
  settings: {
    success: boolean;
    message: string;
  };
  data: T;
}

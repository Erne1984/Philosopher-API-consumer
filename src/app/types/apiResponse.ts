export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
export interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  copies: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

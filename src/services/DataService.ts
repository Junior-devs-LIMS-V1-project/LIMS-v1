import { Book, PaginatedResponse } from '../models/Book';

export class DataService {
  private books: Book[] = [];

  public initialize(books: Book[]): void {
    this.books = books;
    console.log(`Data service initialized with ${this.books.length} books`);
  }

  public getAllBooks(page: number = 1, limit: number = 10): PaginatedResponse<Book> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = this.books.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total: this.books.length,
      page,
      limit,
      totalPages: Math.ceil(this.books.length / limit)
    };
  }

  public getBookByIsbn(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}

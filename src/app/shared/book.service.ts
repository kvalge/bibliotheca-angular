import {BookModel} from "../books/book.model";

export class BookService {

  private books: BookModel[] = [];

  setBooks(books: BookModel[]) {
    this.books = books;
  }

  getBooks() {
    return this.books;
  }
}

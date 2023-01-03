import {BookModel} from "../books/book.model";

export class BookService {

  private books: BookModel[] = [];
  private book: BookModel = null;

  setBooks(books: BookModel[]) {
    this.books = books;
  }

  getBooks() {
    return this.books;
  }

  setBook(book: BookModel) {
    this.book = book;
  }

  getBook() {
    return this.book;
  }

  addBook(book: BookModel) {
    this.books.push(book);
  }

  findBookByName(bookName: any) {
    return this.books.find((b) => {
      return b.name === bookName;
    })
  }
}

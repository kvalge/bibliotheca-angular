import {BookModel} from "../books/book.model";
import {LibraryUserModel} from "../library-user/library-user.model";
import {LibrarianModel} from "../librarian/librarian.model";

export class LendingModel {

  public id: number;
  public lendingDate: Date;
  public dueDate: Date;
  public returnDate: Date;
  public status: string;
  public libraryUser: LibraryUserModel;
  public book: BookModel;
  public librarian: LibrarianModel;

  constructor(id: number, lendingDate: Date, dueDate: Date, returnDate: Date, status: string, libraryUser: LibraryUserModel, book: BookModel, librarian: LibrarianModel) {
    this.id = id;
    this.lendingDate = lendingDate;
    this.dueDate = dueDate;
    this.returnDate = returnDate;
    this.status = status;
    this.libraryUser = libraryUser;
    this.book = book;
    this.librarian = librarian;
  }
}

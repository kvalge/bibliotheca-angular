import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {BookService} from "./book.service";
import {BookModel} from "../books/book.model";
import {LendingService} from "./lending.service";
import {LendingReportModel} from "../lending/lending/lending-report/lending-report.model";
import {LibraryUserModel} from "../library-user/library-user.model";
import {LibraryUserService} from "./library-user.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private lendingService: LendingService,
    private libraryUserService: LibraryUserService) {
  }

  getAllBooks() {
    this.http.get<BookModel[]>('http://localhost:8080/book/all')
      .pipe(map((books) => {
        return books;
      }))
      .subscribe(books => {
        this.bookService.setBooks(books);
      })
  }

  getOverdueLendings() {
    this.http.get<LendingReportModel[]>('http://localhost:8080/lending/overdue')
      .pipe(map((lendings) => {
        return lendings;
      }))
      .subscribe(lendings => {
        this.lendingService.setOverdueLendings(lendings);
      })
  }

  getLibraryUsers() {
    this.http.get<LibraryUserModel[]>('http://localhost:8080/libraryuser/all')
      .pipe(map((libraryUsers) => {
        return libraryUsers;
      }))
      .subscribe(libraryUsers => {
        this.libraryUserService.setLibraryUsers(libraryUsers);
      })
  }

  getLibUser(libUserCode: string) {
    this.http.get<LibraryUserModel>('http://localhost:8080/libraryuser/idcode?idCode=' + libUserCode)
      .pipe(map((libUser) => {
        return libUser;
      }))
      .subscribe(libUser => {
        this.libraryUserService.setLibUser(libUser)
      })
  }
}

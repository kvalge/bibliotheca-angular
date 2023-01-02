import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {BookService} from "./book.service";
import {BookModel} from "../books/book.model";
import {LendingService} from "./lending.service";
import {LendingReportModel} from "../lending/lending/lending-report/lending-report.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private bookService: BookService, private lendingService: LendingService) {
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
}

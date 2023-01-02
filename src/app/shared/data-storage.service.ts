import {Injectable} from "@angular/core";
import{map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {BookService} from "./book.service";
import {BookModel} from "../books/book.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{

  constructor(private http: HttpClient, private bookService: BookService) {
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

}

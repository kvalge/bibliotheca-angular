import { Component, OnInit } from '@angular/core';
import {BookModel} from "../../book.model";
import {BookService} from "../../../shared/book.service";
import {DataStorageService} from "../../../shared/data-storage.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  bookName: string = '';
  book: BookModel;
  showHeader: boolean = false;

  constructor(private bookService: BookService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getBook(bookName: string) {
    this.showHeader = true;
    this.dataStorageService.findBookByName(bookName);
    this.book = this.bookService.getBook();
    this.bookName = '';
  }
}

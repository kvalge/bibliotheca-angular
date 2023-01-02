import {Component, OnInit} from '@angular/core';

import {BookModel} from "../../book.model";
import {BookService} from "../../../shared/book.service";
import {DataStorageService} from "../../../shared/data-storage.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: BookModel[];
  headers = ['#', 'Pealkiri', 'Eksemplaride arv', 'Laenutusperiood (nädal)', 'Asukoht']
  showHeader: boolean = false;

  constructor(private bookService: BookService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getAllBooks() {
    this.showHeader = true;
    this.dataStorageService.getAllBooks();
    this.books = this.bookService.getBooks();
  }

}

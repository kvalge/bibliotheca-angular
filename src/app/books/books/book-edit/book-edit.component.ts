import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {BookModel} from "../../book.model";
import {BookService} from "../../../shared/book.service";
import {DataStorageService} from "../../../shared/data-storage.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  book: BookModel;
  editMode: boolean = false;

  constructor(private bookService: BookService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      acquisitionDate: new FormControl(null, Validators.required),
      copyQuantity: new FormControl(null, Validators.required),
      loanPeriod: new FormControl(null),
      location: new FormControl(null, Validators.required),
    });
  }

  submitBook() {
    if (!this.editMode) {
      this.dataStorageService.addNewBook(this.bookForm.value);
    } else {
      this.dataStorageService.editBook(this.bookForm.value);
      this.editMode = false;
    }
    this.bookForm.reset();
    this.book = null;
  }

  onCancel() {
    this.bookForm.reset();
  }

  setNewValues(book: BookModel) {
    document.getElementById("top").scrollIntoView({behavior: 'smooth'});
    this.editMode = true;
    this.book = book;
    this.bookForm.patchValue({
      name: book.name,
      acquisitionDate: book.acquisitionDate,
      copyQuantity: book.copyQuantity,
      loanPeriod: book.loanPeriod,
      location: book.location
    })
  }
}

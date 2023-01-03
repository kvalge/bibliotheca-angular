import {Component, OnInit} from '@angular/core';
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
    this.dataStorageService.addNewBook(this.bookForm.value);
    this.bookForm.reset();
  }

  onCancel() {
    this.bookForm.reset();
  }
}

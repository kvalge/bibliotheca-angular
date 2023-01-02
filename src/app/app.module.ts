import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books/books.component';
import { BookListComponent } from './books/books/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

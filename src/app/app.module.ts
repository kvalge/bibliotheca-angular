import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books/books.component';
import {BookListComponent} from './books/books/book-list/book-list.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {DataStorageService} from "./shared/data-storage.service";
import {BookService} from "./shared/book.service";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLinkActive,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataStorageService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

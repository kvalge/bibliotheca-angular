import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLinkActive, RouterOutlet} from "@angular/router";

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books/books.component';
import { BookListComponent } from './books/books/book-list/book-list.component';
import { HeaderComponent } from './layout/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { FooterComponent } from './layout/footer/footer.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

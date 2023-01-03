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
import {LendingComponent} from './lending/lending/lending.component';
import {LendingReportComponent} from "./lending/lending/lending-report/lending-report.component";
import {LendingService} from "./shared/lending.service";
import {LibraryUserListComponent} from './library-user/library-user-list/library-user-list.component';
import {LibraryUserComponent} from './library-user/library-user.component';
import {LibraryUserService} from "./shared/library-user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LibraryUserEditComponent } from './library-user/library-user-edit/library-user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    HeaderComponent,
    FooterComponent,
    LendingComponent,
    LendingReportComponent,
    LibraryUserListComponent,
    LibraryUserComponent,
    LibraryUserEditComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterLinkActive,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [DataStorageService, BookService, LendingService, LibraryUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

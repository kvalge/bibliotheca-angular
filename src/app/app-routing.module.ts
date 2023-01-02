import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {BooksComponent} from "./books/books/books.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: "full"},
  {path: 'books', component: BooksComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

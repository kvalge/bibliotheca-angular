import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {BooksComponent} from "./books/books/books.component";
import {LendingComponent} from "./lending/lending/lending.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: "full"},
  {path: 'books', component: BooksComponent},
  {path: 'lending', component: LendingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

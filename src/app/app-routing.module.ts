import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {BooksComponent} from "./books/books/books.component";
import {LendingComponent} from "./lending/lending/lending.component";
import {LibraryUserComponent} from "./library-user/library-user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: "full"},
  {path: 'books', component: BooksComponent},
  {path: 'lending', component: LendingComponent},
  {path: 'library/user', component: LibraryUserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

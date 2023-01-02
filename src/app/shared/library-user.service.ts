import {LibraryUserModel} from "../library-user/library-user.model";

export class LibraryUserService {

  private libraryUsers: LibraryUserModel[] = [];

  setLibraryUsers(libraryUsers: LibraryUserModel[]) {
    this.libraryUsers = libraryUsers;
  }

  getLibraryUsers() {
    return this.libraryUsers;
  }
}

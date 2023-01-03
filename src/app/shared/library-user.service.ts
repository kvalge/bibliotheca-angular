import {LibraryUserModel} from "../library-user/library-user.model";

export class LibraryUserService {

  private libraryUsers: LibraryUserModel[] = [];
  private libUser: LibraryUserModel;

  setLibraryUsers(libraryUsers: LibraryUserModel[]) {
    this.libraryUsers = libraryUsers;
  }

  getLibraryUsers() {
    return this.libraryUsers;
  }

  setLibUser(libUser: LibraryUserModel) {
    this.libUser = libUser;
  }

  getLibUser() {
    return this.libUser;
  }

  addNewLibUser(idCode: any) {
    return this.libraryUsers.find((user) => {
      return user.idCode === idCode;
    })
  }
}

import {UserModel} from "../user/user.model";

export class LibraryUserModel {

  public id: number;
  public idCode: String;
  public firstName: string;
  public lastName: string;
  public user: UserModel;

  constructor(id: number, idCode: String, firstName: string, lastName: string, user: UserModel) {
    this.id = id;
    this.idCode = idCode;
    this.firstName = firstName;
    this.lastName = lastName;
    this.user = user;
  }
}

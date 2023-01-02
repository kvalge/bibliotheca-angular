import {UserModel} from "../user/user.model";

export class LibrarianModel {

  public id: number;
  public idCode: string;
  public user: UserModel;

  constructor(id: number, idCode: string, user: UserModel) {
    this.id = id;
    this.idCode = idCode;
    this.user = user;
  }
}

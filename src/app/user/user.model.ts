import {RoleModel} from "../role/role.model";

export class UserModel {

  public id: number;
  public username: string;
  public password: string;
  public roleName: string;

  constructor(id: number, username: string, password: string, roleName: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.roleName = roleName;
  }
}

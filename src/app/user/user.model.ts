import {RoleModel} from "../role/role.model";

export class UserModel {

  public id: number;
  public username: string;
  public password: string;
  public role: RoleModel;

  constructor(id: number, username: string, password: string, role: RoleModel) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

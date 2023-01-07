import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../user/user.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(userModel: UserModel) {
    this.http.post('http://localhost:8080/user/new', userModel)
      .subscribe();
  }
}

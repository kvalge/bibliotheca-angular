import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../shared/auth.service";
import {UserModel} from "../user/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      roleName: new FormControl(null, Validators.required),
    });
  }

  onRegister() {
    this.authService.register(this.userForm.value);
    this.userForm.reset();
    this.router.navigate(['login']);
  }
}

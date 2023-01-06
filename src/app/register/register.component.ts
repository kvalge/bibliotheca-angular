import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegister(form: NgForm) {
    this.router.navigate(['login']);
    form.reset();
  }
}

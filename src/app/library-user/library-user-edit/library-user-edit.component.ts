import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LibraryUserService} from "../../shared/library-user.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-library-user-edit',
  templateUrl: './library-user-edit.component.html',
  styleUrls: ['./library-user-edit.component.css']
})
export class LibraryUserEditComponent implements OnInit {

  libUserForm: FormGroup;

  constructor(private libraryUserService: LibraryUserService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {

    this.libUserForm = new FormGroup({
      idCode: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
    });
  }

  submitLibUser() {
    this.dataStorageService.addNewLibUser(this.libUserForm.value);
    this.libUserForm.reset();
  }
}

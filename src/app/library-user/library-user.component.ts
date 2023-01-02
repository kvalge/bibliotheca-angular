import {Component, OnInit} from '@angular/core';
import {LibraryUserModel} from "./library-user.model";
import {LibraryUserService} from "../shared/library-user.service";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-library-user',
  templateUrl: './library-user.component.html',
  styleUrls: ['./library-user.component.css']
})
export class LibraryUserComponent implements OnInit {

  libUserCode: string = '';
  libUser: LibraryUserModel;
  showHeader: boolean = false;

  constructor(private libraryUserService: LibraryUserService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getLibraryUser(libUserName: string) {
    this.showHeader = true;
    this.dataStorageService.getLibUser(libUserName);
    this.libUser = this.libraryUserService.getLibUser();
  }
}

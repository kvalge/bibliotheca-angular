import {Component, OnInit} from '@angular/core';
import {LibraryUserModel} from "../library-user.model";
import {LibraryUserService} from "../../shared/library-user.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-library-user-list',
  templateUrl: './library-user-list.component.html',
  styleUrls: ['./library-user-list.component.css']
})
export class LibraryUserListComponent implements OnInit {

  libraryUser: LibraryUserModel[];
  headers = ['#', 'Lugejakaardi nr', 'Eesnimi', 'Perekonnanimi']
  showHeader: boolean = false;

  constructor(private libraryUserService: LibraryUserService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getAllLibraryUsers() {
    this.showHeader = true;
    this.dataStorageService.getLibraryUsers();
    this.libraryUser = this.libraryUserService.getLibraryUsers();
  }

  onCloseList() {
    this.showHeader = false;
  }
}

import {Component, OnInit} from '@angular/core';

import {LendingService} from "../../../shared/lending.service";
import {DataStorageService} from "../../../shared/data-storage.service";
import {LendingReportModel} from "./lending-report.model";

@Component({
  selector: 'app-lending-report',
  templateUrl: './lending-report.component.html',
  styleUrls: ['./lending-report.component.css']
})
export class LendingReportComponent implements OnInit {

  lendings: LendingReportModel[];
  headers = ['#', 'Eesnimi', 'Perekonnanimi', 'Raamat', 'Ületatud aeg (päev)']
  showHeader: boolean = false;

  constructor(private lendingService: LendingService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getOverdueLendings() {
    this.showHeader = true;
    this.dataStorageService.getOverdueLending();
    this.lendings = this.lendingService.getOverdueLendings();
  }
}

import {LendingReportModel} from "../lending/lending/lending-report/lending-report.model";

export class LendingService {

  private lendingReport: LendingReportModel[] = [];

  setOverdueLendings(lendings: LendingReportModel[]) {
    this.lendingReport = lendings;
  }

  getOverdueLendings() {
    return this.lendingReport;
  }
}

import {LendingReportModel} from "../lending/lending/lending-report/lending-report.model";

export class LendingService {

  private lendingReport: LendingReportModel[] = [];

  setOverdueLending(lendings: LendingReportModel[]) {
    this.lendingReport = lendings;
  }

  getOverdueLendings() {
    return this.lendingReport;
  }
}

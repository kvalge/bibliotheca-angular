export class LendingReportModel {

  public libraryUserFirstName: string;
  public libraryUserLastName: string;
  public bookName: string;
  public daysOverdue: number;

  constructor(libraryUserFirstName: string, libraryUserLastName: string, bookName: string, daysOverdue: number) {
    this.libraryUserFirstName = libraryUserFirstName;
    this.libraryUserLastName = libraryUserLastName;
    this.bookName = bookName;
    this.daysOverdue = daysOverdue;
  }
}

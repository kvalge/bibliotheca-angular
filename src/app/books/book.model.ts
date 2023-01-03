export class BookModel {

  public id: number;
  public name: string;
  public acquisitionDate: Date;
  public copyQuantity: number;
  public loanPeriod: number;
  public location: string;

  constructor(id: number, name: string, acquisitionDate: Date, copyQuantity: number, loanPeriod: number, location: string) {
    this.id = id;
    this.name = name;
    this.acquisitionDate = acquisitionDate;
    this.copyQuantity = copyQuantity;
    this.loanPeriod = loanPeriod;
    this.location = location;
  }
}

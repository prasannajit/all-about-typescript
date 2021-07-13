export class Point {
  class = "Point";
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];
  // constructor(name: string,id:string) {
  //   this.name = name;
  //   this.id=id;
  // }
  constructor(protected readonly name: string, protected id: string) {}
  abstract describe(): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

export class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT_DEPARTMENT", id);
  }
  describe() {
    console.log(`${this.name} has id ${this.id}`);
  }
  addEmployee(name: string) {
    if (name === "Harry") {
      return;
    }
    //super.addEmployee(name);
    this.employees.push(name);
  }
}

export class AccountingDepartment extends Department {
  private lastReport: string;
  private static FULL_DEP_NAME = "accounting_department";
  describe() {
    console.log(`${this.name} has id ${this.id}`);
  }
  static getFullDepartmentName() {
    return AccountingDepartment.FULL_DEP_NAME;
  }
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error(`No recent report exists`);
  }
  set mostRecentReport(value) {
    if (value !== this.lastReport) {
      this.lastReport = value;
      this.reports.unshift(value);
    }
  }
  constructor(id: string, private reports: string[]) {
    super("Accounting", id);
    this.lastReport = reports[0];
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  removeReport() {
    this.reports.pop();
  }
}

// Singleton class
export class HistoryDepartment extends Department{
  private static instance:HistoryDepartment|null=null;

  static getInstance(id:string){
    if(!this.instance){
      this.instance=new HistoryDepartment(id);
    }
    return this.instance;
  }
  private constructor(id:string){
    super('HistoryDepartment','26');
  }
  describe() {
    console.log(`${this.name} has id ${this.id}`);
  }
}

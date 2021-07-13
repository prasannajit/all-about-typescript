import { IPrintable, IAddressable } from "./typescript/interface/index";
import { AccountingDepartment } from "./typescript/class/index";
import { Animal } from "./typescript/decorators";
// import { range, rangeWithGenerator } from "./es6/iterable";
// import { ThreeStringGenerator } from "./es6/generators";
// import { asyncRange } from "./es6/asyncIterable";
// import {
//   addTwoNumbers,
//   subtractTwoNumbers,
//   printNameDes,
// } from "./typescript/func";
// import { print } from "./typescript/union";
import {
  Point,
  Department,
  ITDepartment,
  HistoryDepartment,
} from "./typescript/class";
import { Person } from "./typescript/interface";
import { extract, merge } from "./typescript/generics";
/** Usage of an iterable */
// for (const val of range) {
//   console.log(`The value is ${val}`);
// }
// for (const val of rangeWithGenerator) {
//   console.log(`The value is ${val}`);
// }
/** iterable can be used with spread operators */
// console.log([...range]);
// console.log([...rangeWithGenerator]);
/** can be converted to an array */
// console.log(Array.from(range));

/** Generator functions */
// for (const val of ThreeStringGenerator()) {
//   console.log(`From generator val is ${val}`);
// }
// console.log([...ThreeStringGenerator()]);

/** Async iterables */
// (async () => {
//   for await (let value of asyncRange) {
//     console.log(`From async iterator ${value}`);
//   }
// })();

/** Typescript */
// console.log(`The sum is ${addTwoNumbers(12, 12, 'Adding Numbers')}`);
// console.log(printNameDes({ firstName: "Babu" }));
// console.log(print(1));
// console.log(print("Name"));

/** object */
// Redundant
// const obj: { name: string; age: number } = {
//   name: "john",
//   age: 30,
// };

// enum departments {'Payroll'=100,'Computer_Science'=200};
// const obj:{
//   name: string,
//   age: number,
//   hobbies: Array<string>,
//   role: [number,string],
//   dept: departments
// } = {
//   name: "john",
//   age: 30,
//   hobbies:['swimming','running'],
//   role:[2,'Admin'],
//   dept: departments.Computer_Science
// };

// console.log(obj.name);

const pt = new Point(12, 1);
console.log(pt.x);

// const dep=new Department('Computer Science','23');
// dep.addEmployee('Jack');
// dep.addEmployee('Jill');
// dep.printEmployeeInformation();

const itDep = new ITDepartment("23", ["Harry"]);
itDep.describe();
console.log(itDep);

const accDep = new AccountingDepartment("24", [
  "No money",
  "Money credited 100",
  "Money debited 10",
]);
console.log(accDep.mostRecentReport);
accDep.mostRecentReport = "Money credited 800";
console.log(accDep.mostRecentReport);
console.log(AccountingDepartment.getFullDepartmentName());

const instance = HistoryDepartment.getInstance("45");
console.log(instance.describe());

const person: Person = {
  name: "Hary",
  age: 34,
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  },
};
person.greet("Good Morning");

class Employee implements IPrintable, IAddressable {
  constructor(
    public title: string,
    public firstName: string,
    public lastName: string
  ) {}
  print() {
    console.log(`I am Employee class`);
  }
  printName() {
    console.log(
      `My fullname is ${this.title} ${this.firstName} ${this.lastName}`
    );
  }
}

const emp = new Employee("Mr", "Flying", "Sikh");
emp.print();
emp.printName();

// Intersection ob object types  (combinations) are available
type Name = {
  firstName: string;
  lastName: string;
};
type Emp = {
  age: number;
};
type EmpWithName = Emp & Name;
let anEmp: EmpWithName;

anEmp = {
  firstName: "Harry",
  lastName: "Scot",
  age: 40,
};

console.log(anEmp.firstName);

// Intersection with union types only (intersections) are available
type demo1 = number | string;
type demo2 = number | boolean;

type combined = demo1 & demo2;

let num2: combined;
//num2='hello';
num2 = 13;

interface ErrorContainer {
  [prop: string]: string;
}

const emailError: ErrorContainer = {
  email: "Not valid email",
};

// options chaining
const prasan = {
  name: "Prasan",
  age: 37,
  job: {
    years: 14,
    company: "Tesco",
  },
};
console.log(prasan?.job?.company);
// nullish coalescing
const userInput = null;
const storedData = userInput ?? "default";
console.log(storedData);

// Generics
let result = merge({ name: "hello" }, { age: 30 });
console.log(result);


console.log(extract({age:30,name:'harry'},'name'));

const animal = new Animal('tiger');

import { range, rangeWithGenerator } from "./es6/iterable";
import { ThreeStringGenerator } from "./es6/generators";
import { asyncRange } from "./es6/asyncIterable";
import {
  addTwoNumbers,
  subtractTwoNumbers,
  printNameDes,
} from "./typescript/func";
import { print } from "./typescript/union";
/** Usage of an iterable */
for (const val of range) {
  console.log(`The value is ${val}`);
}
for (const val of rangeWithGenerator) {
  console.log(`The value is ${val}`);
}
/** iterable can be used with spread operators */
console.log([...range]);
console.log([...rangeWithGenerator]);
/** can be converted to an array */
console.log(Array.from(range));

/** Generator functions */
for (const val of ThreeStringGenerator()) {
  console.log(`From generator val is ${val}`);
}
console.log([...ThreeStringGenerator()]);

/** Async iterables */
(async () => {
  for await (let value of asyncRange) {
    console.log(`From async iterator ${value}`);
  }
})();

/** Typescript */
console.log(`The sum is ${addTwoNumbers(12, 12)}`);
console.log(printNameDes({ firstName: "Babu" }));
console.log(print(1));
console.log(print('Name'));

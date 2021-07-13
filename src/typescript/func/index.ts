type FullName = {
  firstName: string;
  lastName?: string;
};

type addParam = number | string;

export function addTwoNumbers(num1: addParam, num2: addParam, resultText:'Adding Numbers'|'Adding strings'): addParam {
  if(typeof num1 === 'string' && typeof num2==='string'){
    return num1.toLowerCase() + num2.toLowerCase();
  }
  if(typeof num1 === 'number' && typeof num2==='number'){
    return num1 + num2;
  }
  throw new Error(`${resultText} Cant add, types of not compatible`);
}

export const subtractTwoNumbers = (num1: number, num2: number): number => {
  return num1 - num2;
};

// export const printName=(name:{firstName:string,lastName?:string}):void=>{
//     console.log(`The firstName is ${name.firstName} and lastName is ${name.lastName} `)
// }

export const printName = (name: FullName): void => {
  console.log(
    `The firstName is ${name.firstName} and lastName is ${name.lastName} `
  );
};

export const printNameDes = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName?: string;
}): void => {
  console.log(`The firstName is ${firstName} and lastName is ${lastName} `);
};

// call signature
type funcWithArguments = {
  name: "printName";
  (firstName: string, lastName: string): void;
};

function HigherOrderFunction(
  fn: funcWithArguments,
  firstName: string,
  lastName: string
) {
  console.log(`Function name is ${fn.name}`);
  fn(firstName, lastName);
}

// Generic function
function getFirstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

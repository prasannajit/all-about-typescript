// call signature syntax generic function
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;

// Generic type
interface GenericIdentityFn1<Type> {
    (arg: Type): Type;
}

function identity1<Type>(arg: Type): Type {
    return arg;
}

let myIdentity1: GenericIdentityFn1<number> = identity1;

// Generic class
// class GenericClass<T>{
//     value: T;
//     add: <T>(num1: T, num2: T) => T;

// }

// generics with constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

// type params in generic constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");

// class types in generics
function create<Type>(c: { new(): Type }): Type {
    return new c();
}

// key of operator
type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

//type of operator
let s = 'hello';
let t: typeof s;
t = 'world';

type Fn = (x: string) => boolean;
type FnRType = ReturnType<Fn>

function Fn_1(x: string): boolean {
    return true;
}
type FnRType_1 = ReturnType<typeof Fn_1>

//indexed type
type Person7 = { age: number; name: string; alive: boolean };
type Age = Person7["age"];

type I2 = Person[keyof Person];
type I1 = Person['age' | 'name'];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person9 = typeof MyArray[number];
type key = "age";
type Age1 = Person9[key];

// conditional type
interface Animal{
    canRun: boolean;
}

interface Lion extends Animal{
    canRoar: boolean;
}

type conditional = Lion extends Animal?number:string;
type conditional1 = Date extends Animal?number:string;
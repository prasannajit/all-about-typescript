// object types
interface Person1 {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
}

const displayPersonDetails1 = (person: { name: string, age: number }) => {
    console.log(`Name ${person.name} is ${person.age} years old`)
}
const displayPersonDetails2 = (person: Person1) => {
    console.log(`Name ${person.name} is ${person.age} years old`)
}

// optional and readonly properties
interface Shape {
    readonly type: string;
    radius?: number;
    side?: number;

}

// typescript does not check whether properties are readonly or not, when assigning

interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;
readonlyPerson.age++;

// index signatures
interface AnyObject {
    // An index signature property type must be either ‘string’ or ‘number’.
    [key: string]: any;
}

// Extending types
interface Person {
    name: string;
    age: number;
}
interface PersonWithSalary extends Person {
    salary: number;
}

// intersection types
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;
function draw(circle: ColorfulCircle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
// draw({ color: "red", raidus: 42 });

// Generic object type
interface Box<Type> {
    contents: Type;
}
// can be done as type alias as well
type BoxTA<Type> = {
    contents: Type
}

// Readonly array type
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
function printArray(arr: ReadonlyArray<number>) {
    for (const i of arr) {
        console.log(i);
    }
    arr.push(12);
}

// tuple type
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
const url: [string, string] = ['schemes', 'https://localost:3000/schemes'];

// tuple with optional
type urldesc = [string, string, string?];
function printUrl(details: urldesc) {
    const [, , desc] = details;
    if (desc) {
        console.log(desc);
    }
}

//readonly tuples
function doSomething(pair: readonly [string, number]) {
    pair[0] = "hello!";
    // Cannot assign to '0' because it is a read-only property.
}

// mutabilty
let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
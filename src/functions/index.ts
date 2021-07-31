// Function accepts two arguments and returns one
export const add = (item1: number | string, item2: number | string): number | string => {
    if (typeof item1 === 'number' && typeof item2 === 'number') {
        return item1 + item2;
    }
    if (typeof item1 === 'string' && typeof item2 === 'string') {
        return item1.toLowerCase() + item2.toLowerCase();
    }
    throw new Error('Invalid Arguments');
};

// Function accepts another function
export const higherOrderFunction1 = (text: string, fn: (text: string) => void): void => {
    fn(text);
};

// Function returns another function
export const higherOrderFunction2 = (): (text: string) => void => {
    return (text: string) => {
        console.log(text);
    }
};

// call signature
type CallableFunction = {
    name: string;
    (text: string): void;
}

// constructor signature
type ConstructableFunction = {
    name: string,
    new(text: string): object
}

// Generic function
export const CreateArrayGeneric = <Type>(item1: Type, item2: Type): Type[] => {
    const arr: Type[] = [];
    arr.push(item1);
    arr.push(item2);
    return arr;
}

// constraints
export const longest = <Type extends { length: number }>(item1: Type, item2: Type) => {
    if (item1.length > item2.length) {
        return item1;
    }
    return item2;
};

export const combine = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
    return [...arr1, ...arr2];
};

// optional param
export const greet = (name?: string): void => {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log('Hello Guest')
    }
}

// overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
// This overload signature is not compatible with its implementation signature.
function fn(x: string | number): string | boolean {
    return "oops";
}

// this
export interface User {
    isAdmin: boolean;
}
export function functionWithThis(this: User, txt: String): boolean {
    console.log(txt);
    return this.isAdmin;
};

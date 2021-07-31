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
const CreateArrayGeneric = <Type>(item1: Type, item2: Type): Type[] => {
    const arr: Type[] = [];
    arr.push(item1);
    arr.push(item2);
    return arr;
}
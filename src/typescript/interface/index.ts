import { isFunction } from "util";

export interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

export interface IPrintable{
    print():void;
}

export interface ITitle {
    title: string;
}
export interface INamed{
    firstName: string;
    lastName: string;
}
export interface IAddressable extends INamed, ITitle{
    printName():void;
}

export interface IAddfFunc{
    (num1:number,num2:number):number;
}
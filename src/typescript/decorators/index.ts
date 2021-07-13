function Walk(customized:string) {
    return function(constructor: Function){
        console.log(`${customized}***********walking....*************`);
    }
  
}

@Walk("Animal")
export class Animal {
  constructor(type: string) {
      console.log(`Creating a new Animal object`);
  }
}

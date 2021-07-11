export const print = (val:number|string):void=>{
    if(typeof val === 'string'){
        console.log(val.toLocaleLowerCase('en-IE'));
    } else{
        console.log(val);
    }
}
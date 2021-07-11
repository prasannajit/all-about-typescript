export const asyncRange = {
  [Symbol.asyncIterator]: async function* () {
    for (let i = 1; i <= 5; i++) {
      yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(i);
        },1000);
      });
    }
  },
};

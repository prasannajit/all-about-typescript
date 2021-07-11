/** Create an custom iterator */
export const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function () {
    let count = this.from;
    let end = this.to;
    return {
      next: function () {
        let done = false;
        if (count > end) {
          done = true;
        }
        return {
          value: count++,
          done,
        };
      },
    };
  },
};

export const rangeWithGenerator = {
  from: 10,
  to: 15,
  [Symbol.iterator]: function* () {
    for(let i=this.from;i<=this.to;i++){
        yield i;
    }
  },
};

import { combine, longest, functionWithThis } from './functions/index';
import type { User } from './functions/index';
// functions
console.log(longest([1, 2, 4], [2, 3]));
console.log(combine<number | string>([1, 2, 3], ['hello']));
const user: User = {
    isAdmin: false,
}
console.log(functionWithThis.call(user,'hello'));
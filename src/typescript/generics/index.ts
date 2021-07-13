export function merge<T1 extends object, T2 extends object>(
  obj1: T1,
  obj2: T2
) {
  return Object.assign(obj1, obj2);
}

export function extract<T1 extends object, T2 extends keyof T1>(
  obj: T1,
  key: T2
) {
  return 'value '+ obj[key];
}

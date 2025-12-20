function curry(fn) {
  const arity = fn.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    }

    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    }
  }
}

const add = (a, b, c) => {
  return a + b + c;
}

const cadd = curry(add);
const cadd1 = cadd(1);
const cadd2 = cadd1(2);
const cadd3 = cadd2(3);

console.log(cadd(1)(2));
console.log(cadd(1)(2)(3));
console.log(cadd3);
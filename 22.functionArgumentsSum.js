function es5Sum1() {
  var totals = 0;

  for (let i = 0; i < arguments.length; i++) {
    totals = arguments[i] + totals;
  }

  return totals;
}

console.log(es5Sum1(1, 2, 3));
console.log(es5Sum1(1, 2, 3, 4, 5));

function es5Sum2() {
  return Array.prototype.reduce.call(arguments, function (prev, curr) {
    return prev + curr;
  })
}

console.log(es5Sum2(1, 2, 3));
console.log(es5Sum2(1, 2, 3, 4, 5));


// const sum = (...args) => {
//   return args.reduce((prev, curr) => prev + curr, 0);
// }

function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

// const sum = (...args) => args.reduce((prev, curr) => prev + curr, 0)

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
Function.prototype._call = function (context, ...args) {
  context = context ?? globalThis;
  context = Object(context);

  const fnSymbol = Symbol('fn');

  context[fnSymbol] = this;

  let res;
  try {
    res = context[fnSymbol](...args)
  } finally {
    delete context[fnSymbol];
  }

  return res;
}

function sayHi(a, b) {
  console.log('hello', this.name, a, b);
}

obj = {
  name: 'Bob'
}

sayHi.call(obj, 1, 2);
sayHi._call({ name: 'Alice' }, 3, 4);
Function.prototype._apply = function (context, thisArgs) {
  context = context ?? globalThis;
  context = Object(context);
  console.log(context);
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  thisArgs = Array.isArray(thisArgs) ? thisArgs : [];

  let res;

  try {
    res = context[fnSymbol](...thisArgs);
  } finally {
    delete context[fnSymbol];
  }

  return res;
}

function sayHi(a, b) {
  console.log('hello', this.name, a, b);
}

const obj = {
  name: 'Bob'
}

sayHi.apply(obj, [1, 2]);
sayHi._apply(obj, [3, 4]);
sayHi._apply(obj);
sayHi._apply(obj, 2);
sayHi._apply(1);
sayHi._apply('1');
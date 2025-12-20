Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError('must be called on a function');
  }

  const fn = this;

  const bound = function (...args2) {
    const isNew = this instanceof bound;

    return fn.apply(isNew ? this : context, [...args1, ...args2]);
  }

  if (fn.prototype) {
    bound.prototype = Object.create(fn.prototype);
  }

  return bound;
}

function Person(name) {
  this.name = name;
}

const obj = { name: "qaq" };

const BoundPerson = Person.myBind(obj);

const p = new BoundPerson("Spike");
console.log(p.name);
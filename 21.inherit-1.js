function Parent(name) {
  this.name = 'parent';
}

Parent.prototype.say = function () {
  console.log(this.name);
  return 'qaq';
}

function Child(age) {
  this.age = 18;
}

Child.prototype = new Parent();
console.log(Child);

console.log(Child.prototype);
console.log(Child.prototype.constructor);

Child.prototype.constructor = Child;
console.log(Child.prototype.constructor);

const child = new Child();

console.log(child.age);
console.log(child.name);
// child.say();
console.log(child.say());

child.age = 12;
child.name = '--';
console.log(child.age);
console.log(child.name);

console.log(child);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log('hello');
}

function Student(name, age, Number) {
  Person.call(this, name, age);
  this.Number = Number;
}

function inheritPrototype(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);

  Object.defineProperty(Child.prototype, 'constructor', {
    value: Child,
    enumerable: false,
    configurable: true,
    writable: true
  })
}

inheritPrototype(Student, Person);

const student = new Student('lihua', 20, 10002);
console.log(student.name);
console.log(student.age);
console.log(student.Number);
student.say();
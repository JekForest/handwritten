function isArray(arr) {
  return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
}

arr = [];
arr2 = {};

console.log(isArray(arr));
console.log(isArray(arr2));

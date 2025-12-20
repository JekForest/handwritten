Array.prototype.myMap = function (callback) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }

  return res;
}


// Array.prototype.myMap = function (callback, thisArg) {
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback, 'is not a function');
//   }

//   const arr = this;
//   const len = arr.length;

//   const res = [];

//   for (let i = 0; i < len; i++) {

//     if (Object.prototype.hasOwnProperty.call(arr, i)) {
//       const mappedValue = callback.call(thisArg, arr[i], i, arr);

//       res.push(mappedValue);
//     }

//   }
//   return res;
// }


// Array.prototype.myMap = function (callback, thisArg) {
//   if (this == null) {
//     throw new TypeError('This is null or undefined');
//   }

//   if (typeof callback !== 'function') {
//     throw new TypeError('callback must be a function');
//   }

//   const O = Object(this);

//   const len = O.length >>> 0;

//   const res = new Array(len);

//   for (let k = 0; k < len; k++) {
//     if (k in O) {
//       const mappedValue = callback.call(thisArg, O[k], k, O);

//       // res.push(mappedValue);
//       res[k] = mappedValue;
//     }
//   }

//   return res;

// }


// Array.prototype.myMap = function (callback) {
//   const res = [];

//   for (let i = 0; i < this.length; i++) {
//     res.push(callback(this[i], i, this));
//   }

//   return res;
// }


// Array.prototype.myMap = function (callback, thisArg) {
//   if (typeof callback !== 'function') throw new TypeError(callback, 'is not a function');

//   const res = [];

//   const arr = this;
//   // const len = arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     if (Object.hasOwnProperty.call(arr, i)) {
//       const mappedValue = callback.call(thisArg, arr[i], i, arr);

//       res.push(mappedValue);
//     }
//   }

//   return res;
// }


// Array.prototype.myMap = function (callback, thisArg) {
//   if (this == null) {
//     throw new TypeError('this is null or undefined');
//   }

//   if (typeof callback !== 'function') {
//     throw new TypeError('callback must be a function');
//   }

//   const O = Object(this);

//   const len = O.length >>> 0;

//   const res = new Array(len);

//   for (let k = 0; k < len; k++) {
//     if (k in O) {
//       const mappedValue = callback.call(thisArg, O[k], k, O);

//       res[k] = mappedValue;
//     }
//   }

//   return res;
// }

arr = [1, , 3, 4, 5];

const newArr = arr.myMap((item, i) => item * (i + 1));

console.log(newArr);

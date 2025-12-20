// const myInstanceof = (left, right) => {
//   if (typeof left !== 'object' || left === null) {
//     return false;
//   }

//   if (typeof right !== 'function') {
//     throw new TypeError("Right-hand side is not callable");
//   }

//   const prototype = right.prototype;

//   let proto = Object.getPrototypeOf(left);

//   while (true) {
//     if (proto === null) {
//       return false;
//     }

//     if (proto === prototype) {
//       return true;
//     }

//     proto = Object.getPrototypeOf(proto);
//   }
// }



// const myInstanceof = (left, right) => {
//   if (typeof left !== 'object' || left === null) {
//     return false;
//   }

//   if (typeof right !== 'function') {
//     throw new TypeError('Right-hand side is not callable')
//   }

//   const prototype = right.prototype;

//   let proto = Object.getPrototypeOf(left);

//   while (true) {
//     if (proto === null) {
//       return false;
//     }

//     if (proto === prototype) {
//       return true;
//     }

//     proto = Object.getPrototypeOf(proto);
//   }
// }


const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) {
    return false;
  }

  if (typeof right !== 'function') {
    throw new TypeError('Right-hand side is not callable')
  }

  const prototype = right.prototype;

  let proto = Object.getPrototypeOf(left);


  while (true) {
    if (proto === null) return false;

    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

const arr = new Array();

console.log(myInstanceof(arr, null));
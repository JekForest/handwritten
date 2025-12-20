// function _flat(arr, depth = 1) {
//   if (!Array.isArray(arr) || depth <= 0) {
//     return arr;
//   }

//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr) && depth > 0) {
//       return acc.concat(_flat(curr, depth - 1));
//     } else {
//       return acc.concat(curr);
//     }
//   }, []);
// }

// const _flat = (arr, depth = 1) => {
//   if (!Array.isArray(arr) || depth <= 0) {
//     return arr;
//   }

//   return arr.reduce((acc, cur) => {
//     if (Array.isArray(cur) && depth > 0) {
//       return acc.concat(_flat(cur, depth - 1));
//     } else {
//       return acc.concat(cur);
//     }
//   }, [])
// }

// Object.defineProperty(Array.prototype, '_flat', {
//   value: function (depth = 1) {
//     function _flat(arr, depth = 1) {
//       if (!Array.isArray(arr) || depth <= 0) {
//         return arr;
//       }

//       return arr.reduce((acc, cur) => {
//         if (Array.isArray(cur) && depth > 0) {
//           return acc.concat(_flat(cur, depth - 1));
//         } else {
//           return acc.concat(cur);
//         }
//       }, [])
//     }

//     return _flat(this, depth);
//   },

//   enumerable: false,
//   configurable: true,
//   writable: true
// })

// 迭代法

// function _flat(arr, depth = 1) {
//   const res = [];

//   const stack = [...arr.map((item) => [item, depth])].reverse();

//   while (stack.length > 0) {
//     const [element, currentDepth] = stack.pop();

//     if (Array.isArray(element) && currentDepth > 0) {
//       for (let i = element.length - 1; i >= 0; i--) {
//         stack.push([element[i], currentDepth - 1]);
//       }
//     } else {
//       res.push(element);
//     }
//   }

//   return res;
// }


// function _flat(arr, depth = 1) {
//   const res = [];

//   const stack = [...arr.map(item => [item, depth])].reverse();

//   while (stack.length > 0) {
//     const [element, currentDepth] = stack.pop();

//     if (Array.isArray(element) && currentDepth > 0) {
//       for (let i = element.length - 1; i >= 0; i--) {
//         stack.push([element[i], currentDepth - 1]);
//       }
//     } else {
//       res.push(element);
//     }
//   }
//   return res;
// }


// const _flat = (arr, depth = 1) => {
//   const res = [];

//   const stack = [...arr.map(item => [item, depth])];

//   while (stack.length > 0) {
//     const [element, currentDepth] = stack.shift();

//     if (Array.isArray(element) && currentDepth > 0) {
//       for (let i = element.length - 1; i >= 0; i--) {
//         stack.unshift([element[i], currentDepth - 1]);
//       }
//     } else {
//       res.push(element);
//     }
//   }

//   return res;
// }


// Object.defineProperty(Array.prototype, '_flat', {
//   value: function (depth = 1) {
//     function flat(arr, depth = 1) {
//       const res = [];
//       const stack = [...arr.map(item => [item, depth])].reverse();

//       while (stack.length > 0) {
//         const [element, currentDepth] = stack.pop();

//         if (Array.isArray(element) && currentDepth > 0) {
//           for (let i = element.length - 1; i >= 0; i--) {
//             stack.push([element[i], currentDepth - 1]);
//           }
//         } else {
//           res.push(element);
//         }
//       }
//       return res;
//     }

//     return flat(this, depth);
//   }
// })

// const _flat = (arr, depth = 1) => {
//   if (!Array.isArray(arr) || depth <= 0) {
//     return arr;
//   }

//   return arr.reduce((acc, cur) => {
//     if (Array.isArray(cur) && depth > 0) {
//       return acc.concat(_flat(cur, depth - 1));
//     } else {
//       return acc.concat(cur);
//     }
//   }, [])
// }

// const _flat = (arr, depth = 1) => {
//   const res = [];

//   const stack = [...arr.map(item => [item, depth])].reverse();

//   while (stack.length > 0) {
//     const [element, currentDepth] = stack.pop();

//     if (Array.isArray(element) && currentDepth > 0) {
//       for (let i = element.length - 1; i >= 0; i--) {
//         stack.push([element[i], currentDepth - 1]);
//       }
//     } else {
//       res.push(element);
//     }
//   }

//   return res;
// }



const testArr = [1, [2, 3], [4, [5, [6]]]];

console.log('原数组:', testArr);
console.log('深度 1:', _flat(testArr));
console.log('深度 2:', _flat(testArr, 2));
console.log('深度 3:', _flat(testArr, 3));
console.log('无限深度:', _flat(testArr, Infinity));
// console.log('flat', testArr._flat(Infinity));
// console.log('flat', testArr._flat());
// console.log('flat:', testArr._flat(3));

// console.log('原生flat', testArr.flat(2));
// console.log('原生flat:', testArr.flat(3));
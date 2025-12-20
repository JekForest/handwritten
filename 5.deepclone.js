// 对象
// const obj = {
//   name: "bob",
//   age: 18,
//   scores: [
//     { subject: "html", scores: 90 },
//     { subject: "JS", scores: 81 }
//   ]
// }

// obj.child = obj;

// 1.JSON 方法
// JSON.parse(JSON.stringify(obj));

// 基础实现：处理对象和数组
// const deepClone = (target) => {
//   if (target === null || typeof target !== 'object') {
//     return target;
//   }

//   const CloneTarget = Array.isArray(target) ? [] : {};

//   for (const key in target) {
//     if (Object.prototype.hasOwnProperty.call(target, key)) {
//       CloneTarget[key] = deepClone(target[key]);
//     }
//   }

//   return CloneTarget;
// }

// // 处理循环引用

// const deepCloneFor = (target, map = new WeakMap()) => {
//   if (target === null || typeof target !== 'object') {
//     return target;
//   }


//   if (map.has(target)) {
//     return map.get(target);
//   }

//   const cloneTarget = Array.isArray(target) ? [] : {};

//   map.set(target, cloneTarget);

//   for (let key in target) {
//     if (Object.prototype.hasOwnProperty.call(target, key)) {
//       cloneTarget[key] = deepCloneFor(target[key], map);
//     }
//   }

//   return cloneTarget;
// }

// const getType = (target) => {
//   return Object.prototype.toString.call(target).slice(8, -1);
// }

// const deepClone = (target, map = new WeakMap()) => {
//   const type = getType(target);

//   let cloneTarget;

//   switch (type) {
//     case 'Array':
//     case 'Object':
//       cloneTarget = Array.isArray(target) ? [] : {};
//       break;
//     case 'Date':
//       return new Date(target);
//     case 'RegExp':
//       return new RegExp(target.source, target.flags);
//     case 'Set':
//       cloneTarget = new Set();
//       break;
//     case 'Map':
//       cloneTarget = new Map();
//       break;
//     default:
//       return target;
//   }

//   if (map.has(target)) {
//     return map.get(target);
//   }

//   map.set(target, cloneTarget);

//   if (type === 'Map') {
//     target.forEach((key, value) => {
//       cloneTarget.set(deepClone(key, map), deepClone(value, map));
//     })

//     return cloneTarget;
//   }

//   if (type === 'Set') {
//     target.forEach((value) => {
//       cloneTarget.add(deepClone(value, map));
//     })

//     return cloneTarget;
//   }

//   const allKeys = Object.keys(target).concat(Object.getOwnPropertySymbols(target));

//   for (let key in allKeys) {
//     cloneTarget[key] = deepClone(target[key], map)
//   }

//   return cloneTarget;
// }


const getType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
}

const deepClone = (target, map = new WeakMap()) => {
  const type = getType(target);

  let cloneTarget;

  switch (type) {
    case 'Object':
    case 'Array':
      cloneTarget = Array.isArray(target) ? [] : {};
      break;
    case 'Date':
      return new Date(target);
    case 'RegExp':
      return new RegExp(target.source, target.flags);
    case 'Map':
      cloneTarget = new Map();
      break;
    case 'Set':
      cloneTarget = new Set();
      break;
    default:
      return target;
  }

  if (map.has(target)) {
    return map.get(target);
  }

  map.set(target, cloneTarget);

  if (type === 'Map') {
    target.forEach((value, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(value, map));
    });
    return cloneTarget;
  }

  if (type === 'Set') {
    target.forEach(value => {
      cloneTarget.add(deepClone(value, map));
    });
    return cloneTarget;
  }

  const allKeys = Object.keys(target).concat(Object.getOwnPropertySymbols(target));

  for (let key of allKeys) {
    cloneTarget[key] = deepClone(target[key], map);
  }

  return cloneTarget;
}


// console.log(JSON.parse(JSON.stringify(obj)))
// console.log(deepClone(obj));

// console.log(deepCloneFor(obj));

// --- 测试代码 ---
const mapKey = new Map();
mapKey.set('key', 'value');

const symbolKey = Symbol('test');

const obj = {
  num: 1,
  str: 'hello',
  bool: true,
  date: new Date(),
  reg: /\d+/gi,
  arr: [1, 2, 3],
  set: new Set([1, 2, { a: 3 }]),
  map: new Map([[mapKey, 'mapValue']]),
  [symbolKey]: 'symbolValue'
};

// 创建循环引用
obj.self = obj;

const clonedObj = deepClone(obj);

console.log('原对象:', obj);
console.log('克隆对象:', clonedObj);
console.log('循环引用检查:', clonedObj.self === clonedObj); // true
console.log('Map 深度检查:', clonedObj.map.keys().next().value !== mapKey); // true (key 也是深拷贝的)
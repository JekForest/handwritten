const uniqueBySet = (arr) => {
  return [...new Set(arr)];
}

// 时间复杂度：O(n)，空间复杂度 O(n)

const arr1 = [1, NaN, 2, NaN, 3];
const arr2 = [1, 2, 2, 3, 3];
const arr3 = [1, '2', 2, 3, 3];

// console.log(uniqueBySet(arr1));


const uniqueByLoop = (arr) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(uniqueByLoop(arr3));

const uniqueByObject = (arr) => {
  const obj = {};
  const res = [];

  for (const item of arr) {
    if (!obj[item]) {
      obj[item] = true;
      res.push(item);
    }
  }

  return res;
}

// console.log(uniqueByObject(arr3))

// 场景: 根据 id 去重用户列表
const users = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 1, name: '张三' }, // 重复 id
];

// 方法一: Map + 字段去重
// function uniqueByKey(arr, key) {
//   const map = new Map();
//   return arr.filter(item => {
//     if (!map.has(item[key])) {
//       map.set(item[key], true);
//       return true;
//     }
//     return false;
//   });
// }


const uniqueByKey = (arr, key) => {
  const map = new Map();

  return arr.filter(item => {
    if (!map.has(item[key])) {
      map.set(item[key], true);
      return true
    }
    return false
  })
}


console.log(uniqueByKey(users, 'id'))
// [[ { id: 1, name: '张三' }, { id: 2, name: '李四' } ]]


const uniqueByJson = (arr) => {
  const seen = new Set();

  return arr.filter(item => {
    const key = JSON.stringify(item);

    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  })
}

console.log(uniqueByJson(users));

const uniqueByFilter = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
}

console.log(uniqueByFilter(arr1))
console.log(uniqueByFilter(arr2))
console.log(uniqueByFilter(arr3))
// console.log(uniqueByFilter(users))


const uniqueByIncludes = (arr) => {
  const res = [];

  arr.forEach(item => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res;
}

console.log(uniqueByIncludes(arr1))
console.log(uniqueByIncludes(arr2))
console.log(uniqueByIncludes(arr3))
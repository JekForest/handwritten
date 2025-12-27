

const arr = [
  { id: "01", name: "张大大", pid: "", job: "项目经理" },
  { id: "02", name: "小亮", pid: "01", job: "产品leader" },
  { id: "03", name: "小美", pid: "01", job: "UIleader" },
  { id: "04", name: "老马", pid: "01", job: "技术leader" },
  { id: "05", name: "老王", pid: "01", job: "测试leader" },
  { id: "06", name: "老李", pid: "01", job: "运维leader" },
  { id: "07", name: "小丽", pid: "02", job: "产品经理" },
  { id: "08", name: "大光", pid: "02", job: "产品经理" },
  { id: "09", name: "小高", pid: "03", job: "UI设计师" },
  { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
  { id: "11", name: "小华", pid: "04", job: "后端工程师" },
  { id: "12", name: "小李", pid: "04", job: "后端工程师" },
  { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
  { id: "14", name: "小强", pid: "05", job: "测试工程师" },
  { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
];


// const buildTree = (arr) => {
//   arr.forEach(item => item.children = []);

//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     const parent = arr[i];

//     if (!parent.pid) {
//       res.push(parent);
//     }

//     for (let j = 0; j < arr.length; j++) {
//       const child = arr[j];

//       if (child.pid === parent.id) {
//         parent.children.push(child);
//       }
//     }
//   }

//   return res;
// }

// const buildTree = (arr) => {
//   arr.forEach(item => (item.children = []));

//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     const parent = arr[i];

//     if (!parent.pid) {
//       res.push(parent);
//     }

//     for (let j = 0; j < arr.length; j++) {
//       const child = arr[j];

//       if (child.pid === parent.id) {
//         parent.children.push(child);
//       }
//     }
//   }

//   return res;
// }

// const buildTree = (arr, pid = "") => {
//   return arr
//     .filter(item => item.pid === pid)
//     .map(item => ({
//       ...item,
//       Children: buildTree(arr, item.id)
//     }))
// }

// const buildTree = (arr, pid = "") => {
//   return arr
//     .filter(item => item.pid = pid)
//     .map(item => ({
//       ...item,
//       children: buildTree(arr, item.id)
//     }));
// }

// const buildTree = (arr, pid = "") => {
//   return arr
//     .filter(item => item.pid === pid)
//     .map(item => ({
//       ...item,
//       children: buildTree(arr, item.id)
//     }));
// }

// const arraryToTree = (arr) => {
//   const map = new Map();

//   for (const item of arr) {
//     item.children = [];
//     map.set(item.id, item);
//   }

//   const roots = [];

//   for (const item of arr) {
//     if (!item.pid) {
//       roots.push(item);
//     } else {
//       const parent = map.get(item.pid);
//       parent.children.push(item);
//     }
//   }

//   return roots;
// }


const arraryToTree = (arr) => {
  const map = new Map();

  for (const item of arr) {
    item.children = [];
    map.set(item.id, item);
  }

  const roots = [];

  for (const item of arr) {
    if (!item.pid) {
      roots.push(item);
    } else {
      const parent = map.get(item.pid);
      parent.children.push(item);
    }
  }

  return roots;
}



console.log(arr);
console.log(arraryToTree(arr));
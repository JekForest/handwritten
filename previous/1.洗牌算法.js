const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const a = [1, 2, 3, 4, 5, 6];
// console.log(shuffle(a));

const sampling = (arr, k) => {
  // 复制避免修改原数组
  const result = [...arr];

  for (let i = 0; i < k; i++) {
    // 从 [i, n-1] 范围内随机选一个
    const j = i + Math.floor(Math.random() * (result.length - i));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, k); // 返回前 k 个
}

console.log(sampling(a, 3))

const str = ["apple", "banana", "apple", "orange", "banana", "apple"];


const findMaxString = (str) => {
  const map = new Map();

  for (const item of str) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  let max = 0;
  let maxKey = null;

  for (const [key, count] of map) {
    if (count > max) {
      max = count;
      maxKey = key;
    }
  }

  return [maxKey, max];
}

console.log(findMaxString(str));
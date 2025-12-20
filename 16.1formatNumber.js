const formatNumber = (num) => {
  num = String(num);
  let [left, right] = num.split('.');
  let count = 0;
  let len = left.length - 1;
  if (left[0] === '-') {
    len = left.length - 2;
  }
  for (let i = len; i > 0; i--) {
    count++;
    if (count === 3) {
      left = left.slice(0, i) + ',' + left.slice(i);
      count = 0;
    }
  }
  if (right === undefined) {
    return left;
  } else {
    return left + '.' + right;
  }
}

const num1 = 1000000.111;
const num2 = -100000000.111;
const num = 100000;
console.log(formatNumber(num1));
console.log(formatNumber(num2));
console.log(formatNumber(num));
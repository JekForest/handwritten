const formatNumber = (num) => {
  let [int, dec] = String(num).split('.');
  let sign = '';

  if (sign) {
    sign = '-';
    int = int.slice(1);
  }

  let res = [];
  let count = 0;

  for (let i = int.length - 1; i >= 0; i--) {
    res.push(int[i]);
    count++;

    if (count === 3 && i !== 0) {
      res.push(',');
      count = 0;
    }
  }

  res = res.reverse().join('');

  return sign + (dec ? res + '.' + dec : res);
}




const num1 = 1000000.111;
const num2 = -100000000.111;
const num = 100000;
console.log(formatNumber(num1));
console.log(formatNumber(num2));
console.log(formatNumber(num));
const sum = (a, b) => {
  let len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');

  let carry = 0;
  let res = '';

  for (let i = len - 1; i >= 0; i--) {
    let digitSum = +a[i] + +b[i] + carry;

    let r = digitSum % 10;
    carry = Math.floor(digitSum / 10);

    res = r + res;
  }

  if (carry > 0) {
    res = carry + res;
  }

  return res;
}


console.log(sum('12345678901234567890', '10000000000000000001'));
const reverseStr = (str) => {
  if (typeof str !== 'string') return;
  return str.split('').reverse().join('');
}

const str = "abc";
console.log(reverseStr(str));
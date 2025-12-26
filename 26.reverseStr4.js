const reverseStr = (str) => {
  return str.split('').reduce((prev, curr) => curr + prev, '')
}

const str = "abc";
console.log(reverseStr(str));
const reverseStr = (str) => {
  return [...str].reduce((prev, curr) => curr + prev, '');
}

const str = "abc";
console.log(reverseStr(str));
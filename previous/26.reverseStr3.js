const reverseStr = (str) => {
  if (str === '') return '';

  return reverseStr(str.substr(1)) + str.charAt(0);
}

const str = "abc";
console.log(reverseStr(str));
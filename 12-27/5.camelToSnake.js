const camelToSnake = (str) => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      // res += (i === 0) ? char.toLowerCase() : '_' + char.toLowerCase();

      res += (i === 0 ? '' : '_') + char.toLowerCase();
    } else {
      res += char;
    }
  }

  return res;
}

console.log(camelToSnake("userName"));     // user_name
console.log(camelToSnake("GetElementById")); // get_element_by_id
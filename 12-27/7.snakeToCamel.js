const snakeToCamel = (str) => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      if (i + 1 < str.length) {
        res += str[i + 1].toUpperCase();
        i++
      }
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(snakeToCamel("user_name"));     // userName 
console.log(snakeToCamel("get_element_by_id")); // getElementById
console.log(snakeToCamel("get_element_by_id_")); // getElementById
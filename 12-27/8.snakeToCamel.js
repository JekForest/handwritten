const snakeToCamel = (str) => {
  return str.split('').map((char, index, arr) => {
    if (char === '_') return '';
    if (index > 0 && arr[index - 1] === '_') return char.toUpperCase();

    return char;
  })
    .join('')
}

console.log(snakeToCamel("user_name"));     // userName 
console.log(snakeToCamel("get_element_by_id")); // getElementById
console.log(snakeToCamel("get_element_by_id_")); // getElementById
const snakeToCamel = (str) => {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}


console.log(snakeToCamel("user_name"));     // userName 
console.log(snakeToCamel("get_element_by_id")); // getElementById
console.log(snakeToCamel("get_element_by_id_")); // getElementById
const camelToSnake = (str) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

console.log(camelToSnake("userName"));     // user_name
console.log(camelToSnake("GetElementById")); // get_element_by_id
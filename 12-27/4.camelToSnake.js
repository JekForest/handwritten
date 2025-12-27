const camelToSnake = (str) => {
  return str
    .split('')
    .map((char, index) => {
      if (char >= 'A' && char <= 'Z') {
        return index === 0 ? char.toLowerCase() : '_' + char.toLowerCase();
      }

      return char;
    })
    .join('');
}

console.log(camelToSnake("userName"));     // user_name
console.log(camelToSnake("GetElementById")); // get_element_by_id
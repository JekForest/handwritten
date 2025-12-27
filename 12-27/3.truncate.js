const truncate = (str, maxLen) => {
  if (str.length <= maxLen) return str;

  return str.slice(0, maxLen) + "...";
}

const str = "This is a very very long text.";
console.log(truncate(str, 15));

const cnstr = "这是一段非常非常非常非常长的文本……";

console.log(truncate(cnstr, 12));
const parseParams = (url) => {
  const res = {};
  const querypart = url.split('?')[1];
  if (!querypart) return res;

  const query = querypart.split('#')[0];

  query.split('&').forEach(p => {
    if (!p) return;

    const [k, v = ''] = p.split('=');

    const key = decodeURIComponent(k);
    const val = decodeURIComponent(v);

    res[key] = res[key] ? [].concat(res[key], val) : val;
  });

  return res;
}

// const parseParamsURL = (url) => {
//   const params = new URL(url, 'http://x').searchParams;
//   const res = {};

//   for (let [key, val] of params) {
//     res[key] = Object.prototype.hasOwnProperty.call(res, key) ? [].concat(res[key], val) : val;
//   }
//   return res;
// }

const parseParamsURL = (url) => {
  const res = {};
  const params = new URL(url, 'http://x').searchParams;

  for (const [key, val] of params) {
    res[key] = Object.prototype.hasOwnProperty.call(res, key) ? [].concat(res[key], val) : val;
  }

  return res;
}


const url = 'https://example.com/page?a=1&b=2&b=3&empty=&flag#section';
console.log(parseParamsURL(url));
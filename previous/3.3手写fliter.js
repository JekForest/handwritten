Array.prototype._fliter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  const O = Object(this);

  const len = O.length >>> 0;

  const res = [];

  for (let k = 0; k < len; k++) {
    if (k in O) {
      if (callback.call(thisArg, O[k], k, O)) {
        res.push(O[k]);
      }
    }
  }

  return res;
}

arr = [1, 2, 3, 4, 5];

console.log(arr._fliter((item, index) => item > 2));
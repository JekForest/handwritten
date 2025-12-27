Array.prototype._reduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError('this is null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  const O = Object(this);
  const len = O.length >>> 0;

  let k = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (k < len && !(k in O)) {
      k++;
    }

    if (k >= len) throw new TypeError('no initial value');

    accumulator = O[k];

    k++;
  }

  while (k < len) {
    if (k in O) {
      accumulator = callback(accumulator, O[k], k, O);
    }
    k++;
  }

  return accumulator;
}

arr = [1, 2, 3, 4, 5];

console.log(arr._reduce((acc, item) => acc += item));
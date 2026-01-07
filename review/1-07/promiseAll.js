function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('promises is not iterable'));
    }

    const result = [];
    let count = 0;
    const total = promises.length;

    if (total === 0) {
      resolve([]);
      return;
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          result[index] = value;

          count++;

          if (count === total) {
            resolve(result);
            return;
          }
        })
        .catch(reject);
    })


  })
}
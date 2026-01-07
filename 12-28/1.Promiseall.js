function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument is not iterable"));
    }

    const res = [];
    let count = 0;
    const total = promises.length;

    if (total === 0) {
      resolve([]);
      return;
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          res[index] = value;
          count++;

          if (count === total) {
            resolve(res);
          }
        }).catch(reject);
    })
  })
}

promiseAll([Promise.reject(1), 2, Promise.resolve(3)]).then(res => console.log(res))
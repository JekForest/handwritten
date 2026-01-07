function myPromiseAllSettled(promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises is not iterable');
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
        .then(value =>
          result[index] = {
            status: 'fulfilled',
            value
          })
        .catch(reason =>
          result[index] = {
            status: 'rejected',
            reason
          })
        .finally(() => {
          count++;
          if (count === total) {
            resolve(result);
          }
        })
    })
  })
}
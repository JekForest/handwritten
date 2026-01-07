function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be a array');
    }

    const errors = [];
    let rejectedCount = 0;
    const total = promises.length;

    if (total === 0) {
      reject(new AggregateError(errors, 'All promises were rejected'));
      return;
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(
          value => {
            resolve(value);
          },
          reason => {
            errors[index] = reason;
            rejectedCount++;
            if (rejectedCount === total) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          }
        )
    })
  })
}
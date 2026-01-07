function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('promises must be a array');
    }

    promises.forEach(p => {
      Promise.resolve(p).then(resolve, reject);
    })
  })
}
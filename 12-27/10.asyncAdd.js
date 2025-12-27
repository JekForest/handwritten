const asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(null, a + b);
  }, 500);
}

const promiseAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  })
}

const serialSum = async (...args) => {
  let res = 0;
  for (const n of args) {
    res = await promiseAdd(res, n);
  }

  return res;
}

const serialSum2 = (...args) => {
  return args.reduce((task, now) => task.then(res => promiseAdd(res, now)), Promise.resolve(0));
}

const parallelSum = async (...args) => {
  if (args.length === 1) return args[0];

  const tasks = [];

  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }

  const result = await Promise.all(tasks);

  return parallelSum(...result);
}


(async () => {
  const result = await serialSum(1, 3, 5);
  const result2 = await serialSum2(1, 3, 6);
  const result3 = await parallelSum(1, 2, 3, 4, 5);
  console.log(result);
  console.log(result2);
  console.log(result3);
})()
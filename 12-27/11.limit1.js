
const limit = async (count, array, iterateFunc) => {
  const tasks = [];
  const executing = [];
  let i = 0;

  const enqueue = async () => {
    if (i >= array.length) return;

    const p = Promise.resolve().then(() => iterateFunc(array[i++]));
    tasks.push(p);

    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);

    if (executing.length >= count) {
      await Promise.race(executing);
    }

    await enqueue();
  }

  await enqueue();
  return Promise.all(tasks);
}

const timeout = i => {
  return new Promise(resovle => {
    setTimeout(() => {
      resovle(i);
    }, i);
  })
}

limit(2, [1000, 1000, 1000, 1000], timeout).then(res => console.log(res));
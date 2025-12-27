// const throttle = (func, delay) => {
//   let lastTime = 0;

//   return function (...args) {
//     const context = this;

//     const now = Date.now();

//     if (now - lastTime >= delay) {
//       lastTime = now;
//       func.apply(context, args);
//     }
//   }
// }

// window.addEventListener('scroll', throttle(() => {
//   console.log('scrolling')
// }, 200))


const throttle = (func, delay) => {
  let lastTime = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(context, args);
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scorlling!!!');
}, 200));
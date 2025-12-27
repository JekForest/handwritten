const throttle = (func, delay) => {
  let timer = null;

  return function (...args) {
    const context = this;
    console.log(context);
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  console.log('scrol1ing');
}, 200));
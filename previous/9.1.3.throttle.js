const throttle = (func, delay) => {
  let lastTime = 0;
  let timer = null;

  return function (...args) {
    const context = this;
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastTime = now;
      func.apply(context, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        lastTime = 0;
        timer = null;
      }, remaining)
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  console.log('scrolling');
}, 200));
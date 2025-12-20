function uncurry(fn) {
  return function (context, ...args) {
    return fn.call(context, ...args);
  }
}
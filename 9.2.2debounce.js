const debounce = (func, delay) => {
  let timer = null;

  return function (...args) {
    const context = this;
    let callNow = !timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
    }, delay);

    if (callNow) {
      func.apply(context, args);
    }
  }
}

const search = document.createElement('input');

search.id = 'search';
search.placeholder = 'enter keywords';

document.body.appendChild(search);

search.addEventListener('input', debounce((e) => {
  console.log('searching', e.target.value);
}, 10000));
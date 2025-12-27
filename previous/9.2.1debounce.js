const debounce = (func, delay) => {
  let timer = null;

  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null;
    }, delay);
  }
}

const search = document.createElement('input');
search.id = 'search';
search.placeholder = 'enter your keywords';

document.body.appendChild(search);

search.addEventListener('input', debounce((e) => {
  console.log('searching', e.target.value);
}, 500));
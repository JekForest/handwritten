const optimizedBubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }


  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaped = true;
      }
    }

    if (!swaped) {
      break;
    }
  }

  return arr;
}

const arr = [6, 3, 8, 5, 2, 7, 4, 1];
optimizedBubbleSort(arr);
console.log(arr);
console.log(optimizedBubbleSort(arr));
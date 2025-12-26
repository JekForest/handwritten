const advancedBubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let lastSwapPos = arr.length - 1;
  let swapBorder = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    lastSwapPos = 0;
    for (let j = 0; j < swapBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaped = true;
        lastSwapPos = j;
      }
    }

    swapBorder = lastSwapPos;
    if (!swaped) {
      break;
    }
  }

  return arr;
}

const arr = [6, 3, 8, 5, 2, 7, 4, 1];
advancedBubbleSort(arr);
console.log(arr);
console.log(advancedBubbleSort(arr));
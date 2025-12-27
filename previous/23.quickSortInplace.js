const quickSortInplace = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  quickSortInplace(arr, left, pivotIndex - 1);
  quickSortInplace(arr, pivotIndex + 1, right);
}

const partition = (arr, left, right) => {
  const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
  [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

  let i = left + 1;
  let j = right;

  while (i <= j) {
    while (i <= j && arr[i] <= arr[left]) i++;
    while (i <= j && arr[j] >= arr[left]) j--;

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[left], arr[j]] = [arr[j], arr[left]];
  return j;
}

const arr = [6, 3, 8, 5, 2, 7, 4, 1]
quickSortInplace(arr)
console.log(arr);
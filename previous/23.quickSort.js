const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = arr.slice(1).filter(item => item < pivot);
  const right = arr.slice(1).filter(item => item > pivot);
  const equals = arr.filter(item => item = pivot);

  return [...quickSort(left), ...equals, ...quickSort(right)];
}
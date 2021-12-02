function filterRange(arr, a, b) {

  let result = [];

  for (const item of arr) {
    if (item >= a && item <= b) {
      result.push(item);
    }
  }
  return result;
}

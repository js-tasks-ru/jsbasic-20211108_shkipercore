function getMinMax(str) {
  let result = {
    min: 0,
    max: 0,
  };

  let arrayOfStrings = str.split(' ');
  let filteredNumbers = [];

  for (const item of arrayOfStrings) {
    if (isFinite(item)) {
      filteredNumbers.push(item);
    }
  }

  result.min = Math.min.apply(null, filteredNumbers);
  result.max = Math.max.apply(null, filteredNumbers);

  return result;
}

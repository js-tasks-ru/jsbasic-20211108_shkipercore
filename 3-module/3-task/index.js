function camelize(str) {

  let arrayOfStrings = str.split('-');
  let result = [];

  for (const item of arrayOfStrings) {
    if (item !== '' && item !== arrayOfStrings[0]) {
      result.push(item[0].toUpperCase() + item.slice(1));
    } else {
      result.push(item);
    }
  }
  return result.join('');
}

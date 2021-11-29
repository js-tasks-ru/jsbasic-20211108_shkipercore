function sumSalary(salaries) {

  let result = 0;

  for (const key in salaries) {
    if (Number.isInteger(salaries[key])) {
      result = result + salaries[key];
    }
  }
  return result;
}

function factorial(n) {

  let result = 1;

  for (; n > 1; n--) {
    result = result * n;
  }

  return result;
}

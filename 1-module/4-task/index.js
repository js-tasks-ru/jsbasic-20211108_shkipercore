function checkSpam(str) {

  str = str.toLowerCase();

  if (str.includes('1xbet')) {
    return true;
  } else {
    return str.includes('xxx');
  }
}

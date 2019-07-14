function reverseNumber(a) {
  let result = 0;
  while (a) {
    result = result * 10 + (a % 10);
    a = Math.floor(a / 10);
  }

  return result;
}

console.log(reverseNumber(123));

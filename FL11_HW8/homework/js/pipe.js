function addOne(x) {
  return x + 1;
}
function pipe(number) {
  let result = number;
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
}

console.log(
  pipe(
    1,
    addOne
  )
);
console.log(
  pipe(
    1,
    addOne,
    addOne
  )
);

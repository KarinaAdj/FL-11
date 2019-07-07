let a = +prompt("Введите сторону а");
let b = +prompt("Введите сторону b");
let c = +prompt("Введите сторону c");

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c && a === c) {
    console.log("Eequivalent triangle");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
  } else {
    console.log("Normal triangle’");
  }
} else {
  console.log("Triangle doesn't exist");
}

let a1 = +prompt("Введите координату а1");
let a2 = +prompt("Введите координату а2");
let b1 = +prompt("Введите координату b1");
let b2 = +prompt("Введите координату b2");
let c1 = +prompt("Введите координату c1");
let c2 = +prompt("Введите координату c2");
let d = 2;
let d1 = (a1 + b1) / d;
let d2 = (a2 + b2) / d;

if (c1 === d1) {
  if (c2 === d2) {
    console.log("it is true");
  } else {
    console.log("it is false");
  }
} else {
  console.log("it is false");
}

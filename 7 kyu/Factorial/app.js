/* 

Description

*/

let input = 13;
let output = 1;

function factorial(n) {
  return n >= 0 && n <= 12
    ? [...Array(n)].map((_, i) => i + 1).reduce((a, b) => a * b, 1)
    : RangeError(_);
}

console.log(factorial(input), output);
console.log(factorial(input) === output);

/* 

const factorial = n =>
  n < 0 || n > 12 ? (() => {throw new RangeError()})() : n < 2 ? 1 : n * factorial(n - 1);

*/

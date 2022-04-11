/* 

*/

let input = -1;
let output = false;

let isSquare = function (n) {
  return Math.floor(Math.sqrt(n)) === Math.sqrt(n);
};

console.log(isSquare(input), output);
console.log(isSquare(input) === output);

/* function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  } */

/*  const isSquare = n => Number.isInteger(Math.sqrt(n)); */

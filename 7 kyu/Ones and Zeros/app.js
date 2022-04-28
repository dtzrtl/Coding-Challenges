/* 
Description
*/

let input = [0, 0, 0, 1];
let output = 1;

const binaryArrayToNumber = (arr) => {
  return arr
    .map((el, i) => el * 2 ** (arr.length - i - 1))
    .reduce((a, b) => a + b);
};

console.log(binaryArrayToNumber(input), output);
console.log(binaryArrayToNumber(input) === output);

/* 
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}
*/

/* 
Description
*/

let input = [0, -1, -5];
let output = "even";

function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven(input), output);
console.log(oddOrEven(input) === output);

/* 
Other Solutions
*/

/* 
Description
*/

let input = [5, 9];
let output = "1110";

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(...input), output);
console.log(addBinary(input) === output);

/* 
Other Solutions
*/

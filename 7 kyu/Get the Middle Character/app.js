/* 
Description
*/

let input = "test";
let output = "es";

function getMiddle(str) {
  return str.length % 2
    ? str[Math.floor(str.length / 2)]
    : str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)];
}

console.log(getMiddle(input), output);
console.log(getMiddle(input) === output);

/* 
Other Solutions
*/

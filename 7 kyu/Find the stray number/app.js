/* 

Description

*/

let input = [1, 1, 2];
let output = 2;

function stray(numbers) {
  return numbers.length - 1 ===
    numbers.sort().indexOf(numbers.sort()[numbers.length - 1])
    ? numbers.sort()[numbers.length - 1]
    : numbers.sort()[0];
}

console.log(stray(input), output);
console.log(stray(input) === output);

/* 

const stray = nums => nums.reduce((a, b) => a ^ b);

*/

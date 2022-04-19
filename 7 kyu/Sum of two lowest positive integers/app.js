/* 
Description
*/

let input = [19, 5, 42, 2, 77];
let output = 7;

function sumTwoSmallestNumbers(nums) {
  let sorted = nums.sort((a, b) => a - b);
  return nums[0] + nums[1];
}

console.log(sumTwoSmallestNumbers(input), output);
console.log(sumTwoSmallestNumbers(input) === output);

/* 
function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
*/

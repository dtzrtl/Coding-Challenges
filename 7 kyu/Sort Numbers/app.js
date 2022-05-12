/* 

Description

*/

let input = [1, 2, 3, 10, 5];
let output = [1, 2, 3, 5, 10];

function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}

console.log(solution(input), output);
console.log(solution(input) === output);

/* 

let solution = (nums) => (nums || []).sort((a,b) => (a-b))

*/

/* 

Description

*/

let input = 0;
let output = 0;

function solution(a, limit) {
  return a.filter((e) => e > limit).length === 0;
}

console.log(solution(input), output);
console.log(solution(input) === output);

/* 

Other Solutions

//Best
smallEnough = (a, l) => a.every(e => e <= l)

//Not best practice since it iterates through whole array instead of returning on first value that exceeds limit
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}


*/

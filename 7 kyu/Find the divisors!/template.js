/* 
Description
*/

let input = 13;
let output = "13 is prime";

function solution(a) {
  ans = [];
  for (i = 2; i < a; i++) {
    if (a % i === 0) ans.push(i);
  }
  return ans.length === 0 ? `${a} is prime` : ans;
}

console.log(solution(input), output);
console.log(solution(input) === output);

/* 
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
*/

/* 
Description
*/

let input = ["abc", "bc"];
let output = true;

function solution(str, ending) {
  return str.indexOf(ending, str.length - ending.length) !== -1;
}

console.log(solution(...input), output);
console.log(solution(...input) === output);

/* 
function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);
*/

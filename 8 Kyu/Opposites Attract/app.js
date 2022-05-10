/* 
Description
*/

let input = [1, 4];
let output = true;

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(...input), output);
console.log(lovefunc(...input) === output);

/* 
Other Solutions
*/

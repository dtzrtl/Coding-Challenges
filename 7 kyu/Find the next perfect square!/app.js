/* 
Description
*/

let input = 121;
let output = 144;

function findNextSquare(sq) {
  return Math.sqrt(sq) === Math.floor(Math.sqrt(sq))
    ? Math.pow(Math.sqrt(sq) + 1, 2)
    : -1;
}

console.log(findNextSquare(input), output);
console.log(findNextSquare(input) === output);

/* 
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
*/

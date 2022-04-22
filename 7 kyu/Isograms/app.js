/* 
Description
*/

let input = "Dermatoglyphics";
let output = true;

function isIsogram(str) {
  return !/(.).*\1/.test(str.toUpperCase());
}

console.log(isIsogram(input), output);
console.log(isIsogram(input) === output);

/* 
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
*/

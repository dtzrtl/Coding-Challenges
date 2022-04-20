/* 
Description
*/

let input = "bitcoin take over the world maybe who knows perhaps";
let output = 3;

function findShort(str) {
  len = str.split(" ").map((s) => s.length);
  return Math.min(...len);
}

console.log(findShort(input), output);
console.log(findShort(input) === output);

/* 
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/

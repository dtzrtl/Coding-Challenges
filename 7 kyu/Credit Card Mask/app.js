/* 
Description
*/

let input = "4556364607935616";
let output = "############5616";

function maskify(cc) {
  return cc
    .split("")
    .map((num, index) => (cc.length - index > 4 ? "#" : num))
    .join("");
}

console.log(maskify(input), output);
console.log(maskify(input) === output);

/* 
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}
*/

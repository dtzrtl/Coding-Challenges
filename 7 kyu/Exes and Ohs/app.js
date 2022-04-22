/* 
Description
*/

let input = "ooxx";
let output = true;

function XO(str) {
  xo = str
    .toLowerCase()
    .split("")
    .filter((char) => char === "x" || char === "o");
  x = xo.filter((char) => char === "x");
  o = xo.filter((char) => char === "o");
  return x.length === o.length;
}

console.log(XO(input), output);
console.log(XO(input) === output);

/* 
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
*/

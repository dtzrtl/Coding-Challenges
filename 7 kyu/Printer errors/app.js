/* 
Description
*/

let input = "aaaxbbbbyyhwawiwjjjwwm";
let output = "8/22";

function printerError(s) {
  return `${
    s
      .split("")
      .filter((el) => !/[a-m]/.test(el))
      .join("").length
  }/${s.length}`;
}
console.log(printerError(input), output);
console.log(printerError(input) === output);

/* 
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
*/

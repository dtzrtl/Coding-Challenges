/* 
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let input = ["xyaabbbccccdefww", "xxxxyyyyabklmopq"];
let output = "abcdefklmopqwxy";

function longest(s1, s2) {
  return (s1 + s2)
    .split("")
    .sort()
    .filter((el, i, arr) => arr.indexOf(el) === i)
    .join("");
}

console.log(longest(...input), output);
console.log(longest(...input) === output);

/* 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
*/

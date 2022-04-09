/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
 */

let input = "john McClane";

let output = "McClane john";

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler(input), output);

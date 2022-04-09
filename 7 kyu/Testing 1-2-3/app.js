/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"] */

let test = ["a", "b", "c"];

let ans = ["1: a", "2: b", "3: c"];

let number = function (array) {
  //your awesome code here
  return array.map((element, index) => index + 1 + ": " + element);
};

console.log(number(test), ans);

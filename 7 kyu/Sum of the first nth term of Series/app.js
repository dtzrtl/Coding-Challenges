/* 
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

let input = 4;
let output = 1.49;

function SeriesSum(n) {
  return [...Array(n)]
    .map((_, i) => 1 / (1 + 3 * i))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
}
console.log(SeriesSum(input), output);
console.log(SeriesSum(input) === output);

/* 

function SeriesSum(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => 1 / (1 + 3 * i))
    .reduce((a, b) => a + b)
    .toPrecision(3);
}

*/

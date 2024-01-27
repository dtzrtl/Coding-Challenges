/* 

Description

*/

let input = 0;
let output = 0;

function checkExam(array1, array2) {
  let points = array1
    .map((e, i) => (array1[i] === array2[i] ? 4 : array2[i] === "" ? 0 : -1))
    .reduce((a, b) => a + b, 0);
  return points < 0 ? 0 : points;
}

console.log(checkExam(input), output);
console.log(checkExam(input) === output);

/* 

Other Solutions

*/

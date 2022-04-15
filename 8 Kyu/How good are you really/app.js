/* 
Description
*/

let input = [[100, 40, 34, 57, 29, 72, 57, 88], 75];
let output = true;

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints
  );
}

console.log(betterThanAverage(...input), output);
console.log(betterThanAverage(...input) === output);

/* 
Other Solutions
*/

/* 
Description
*/

let input = [5, 3, 2, 1, 4];
let output = [5, 3, 2, 4];

function removeSmallest(numbers) {
  return numbers
    .slice(0, numbers.indexOf(Math.min(...numbers)))
    .concat(numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1));
}

console.log(removeSmallest(input), output);
console.log(removeSmallest(input) === output);

/* 

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

*/

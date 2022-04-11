input = "1 9 3 4 -5";

output = "9 -5";

function highAndLow(numbers) {
  sorted = numbers.split(" ").sort((a, b) => b - a);

  return [sorted[0], sorted[sorted.length - 1]].join(" ");
}

console.log(highAndLow(input));

console.log(highAndLow(input) === output);

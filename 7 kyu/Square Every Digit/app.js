input = 9119;

output = 811181;

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((element) => element * element)
      .join("")
  );
}

console.log(squareDigits(input));

console.log(squareDigits(input) === output);

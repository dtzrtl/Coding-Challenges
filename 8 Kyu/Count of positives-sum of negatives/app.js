function countPositivesSumNegatives(array) {
  let positive = 0;
  let negative = 0;
  if (array == null || array.length < 1) return [];
  else
    for (let index = 0; index < array.length; index++) {
      if (array[index] > 0) positive++;
      else negative += array[index];
    }

  return [positive, negative];
}

// function countPositivesSumNegatives(input) {
//   return input && input.length
//     ? [
//         input.filter((p) => p > 0).length,
//         input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
//       ]
//     : [];
// }

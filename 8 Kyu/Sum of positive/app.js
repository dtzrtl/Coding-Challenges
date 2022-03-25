function positiveSum(arr) {
  return arr.filter((e) => e >= 0).reduce((a, b) => a + b, 0);
}

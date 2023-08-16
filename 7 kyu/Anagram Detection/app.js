// write the function isAnagram
let isAnagram = function (test, original) {
  testSorted = test.toLowerCase().split("").sort().join("");

  originalSorted = original.toLowerCase().split("").sort().join("");

  return testSorted === originalSorted;
};
input1 = "foefet";

input2 = "toffee";

console.log(isAnagram(input1, input2));

//const isAnagram = (test, original) => test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();

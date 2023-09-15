let input = "is2 Thi1s T4est 3a";

let output = "Thi1s is2 3a T4est";

const order = (words) => {
  const findNumber = words.match(/[1-9]/g);
  const arrayWords = words.split(" ");
  let result = [];
  if (words.length === 0) return words;
  arrayWords.map((item, i) => {
    let counter = (i + 1).toString();
    const index = findNumber.indexOf(counter);
    result.push(arrayWords[index]);
  });
  return result.join(" ");
};

console.log(order(input));

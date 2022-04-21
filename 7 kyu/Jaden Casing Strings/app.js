/* 
Description
*/

let input = "How can mirrors be real if our eyes aren't real";
let output = "How Can Mirrors Be Real If Our Eyes Aren't Real";

String.prototype.toJadenCase = function (str) {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

console.log(input.toJadenCase(), output);
console.log(input.toJadenCase() === output);

/* 
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/

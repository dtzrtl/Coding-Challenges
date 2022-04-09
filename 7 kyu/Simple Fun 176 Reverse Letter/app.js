/* Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string */

input = "ultr53o?n";

output = "nortlu";

function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((c) => c.toLowerCase() != c.toUpperCase())
    .join("");
}

console.log(reverseLetter(input), output);

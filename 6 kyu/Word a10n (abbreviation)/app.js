/* The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!" */

let input = "You need, need not want, to complete this code-wars mission";

let output = "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n";

/* function abbreviate(string) {
  let hyphen = "-";

  let exclamation = "!";

  let comma = ",";

  words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(hyphen)) {
      wordPair = words[i].split(hyphen);

      words[i] = `${wordPair[0][0]}${wordPair[0].length - 2}${
        wordPair[0][wordPair[0].length - 1]
      }-${wordPair[1][0]}${wordPair[1].length - 2}${
        wordPair[1][wordPair[1].length - 1]
      }`;
    } else if (words[i].includes(exclamation) || words[i].includes(comma)) {
      if (words[i].length - 1 >= 4) {
        words[i] = `${words[i][0]}${words[i].length - 3}${
          words[i][words[i].length - 2]
        }${words[i][words[i].length - 1]}`;
      }
    } else if (words[i].length >= 4)
      words[i] = `${words[i][0]}${words[i].length - 2}${
        words[i][words[i].length - 1]
      }`;
  }
  return words.join(" ");
}
 */

/* var find = /[a-z]{4,}/gi;
function replace(match) {
  return match[0] + (match.length - 2) + match[match.length - 1];
}

function abbreviate(string) {
  return string.replace(find, replace);
}
 */
console.log(abbreviate(input));
console.log(output);

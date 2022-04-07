/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

test = [1,2,'a','b']

ans = [1,2]

/* function filter_list(array) {
    // Return a new array with the strings filtered out
    filtered = []
    for(let i = 0; i<array.length; i++){
        if( typeof array[i] !== 'string')
        filtered.push(array[i])
    }
    return filtered
  } */

  function filter_list(array) {
    return array.filter( element => typeof element == 'number')
  }

console.log(filter_list(test),ans)
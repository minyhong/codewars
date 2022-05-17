// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let newArr = [];

    // split string into individual letters in an array and check each letter, if its capitalized then push a space and the elem, otherwise push just the elem into newArr
    string.split('').forEach(elem => {
      elem === elem.toUpperCase() ? newArr.push(` ${elem}`) : newArr.push(elem)
    })
    
    return newArr.join('')
  }
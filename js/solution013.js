// Task

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

function wave(str) {
    let result = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    for (i = 0; i < str.length; i++) {
      // if the character in such index is an alphabet (NOT WHITESPACE)
      if (alpha.includes(str[i])) {
        // then split str into array and uppercase that indexed char and push into variable strArr
        let strArr = str.split('');
        strArr[i] = strArr[i].toUpperCase();
        result.push(strArr.join(''));
      }
    }
    return result
  }
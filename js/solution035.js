// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

let capitals = function (word) {
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = [];
  
    for (i = 0; i < word.length; i++) {
        if ( cap.includes(word[i]) ) {
            result.push(i)
        }
    }
    return result
};
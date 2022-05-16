//Reverse word

function reverseWords(str) {
    // Go for it
    let newChar = '';
    
    // Splits str argument and stores each word in an array
    let temp = str.split(' ');
    
    // get each word starting from the first word
    for (let i = 0; i < temp.length; i++) {
      //get each letter of that word starting from the last letter of that word
      for (let j = temp[i].length; j >= 0; j--) {
        //add that letter onto the newChar string
        newChar += temp[i].charAt(j);
        // if at the beginning of the letter of each word but not the very last word then add a space
        if (i !== temp.length-1 && j === 0) {
          newChar += ' '
        }
      }
    }
    return newChar;
    
}
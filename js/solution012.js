// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let rot13Message = message.split('').map(elem => {
    // checks to see if lowercased element is in the string variable alphabet
      if ( alphabet.includes( elem.toLowerCase() ) ) {
        // if the elem is already lowercased then find index of elem in alphabet, add 13, then get remainder after dividing by 26 (total letters in alphabet). This becomes new index to take from alphabet and return to map
        if (elem === elem.toLowerCase()) {
          let newIndex = (alphabet.indexOf(elem) + 13) % 26;
          return alphabet[newIndex]
          // else if elem is uppercased then make lowercase and do same process as above and return new alphabet but returned as uppercase
        } else {
          let newElem = elem.toLowerCase();
          let newIndex = (alphabet.indexOf(newElem) + 13) % 26
          return alphabet[newIndex].toUpperCase()
        }
    // if lowercased elem isnt found in the string variable alphabet then just return the original elem
      } else {
        return elem
      }
    })
    return rot13Message.join('')
  }
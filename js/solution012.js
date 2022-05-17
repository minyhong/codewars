// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let rot13Message = message.split('').map(elem => {
      if ( alphabet.includes( elem.toLowerCase() ) ) {
        if (elem === elem.toLowerCase()) {
          let newIndex = (alphabet.indexOf(elem) + 13) % 26;
          return alphabet[newIndex]
        } else {
          let newElem = elem.toLowerCase();
          let newIndex = (alphabet.indexOf(newElem) + 13) % 26
          return alphabet[newIndex].toUpperCase()
        }
      } else {
        return elem
      }
    })
    return rot13Message.join('')
  }
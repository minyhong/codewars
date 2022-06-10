// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    // to hold unique letters
    let containedAlphabet = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerString = string.toLowerCase();
    
    // iterate through the lowercased string and if it is a letter AND not included in the containedAlphabet variable then add to the containedAlphabet variable 
    for (i = 0; i < lowerString.length; i++) {
      if ( alphabet.includes(lowerString[i]) && !containedAlphabet.includes(lowerString[i]) ) {
        containedAlphabet += lowerString[i];
      }
    }

    // return true if containedAlphabet's length is 26, false if not true
    return containedAlphabet.length === 26
  }
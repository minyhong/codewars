// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    // convert num into a string
    let strNum = String(num);
    // store the length of strNum in variable digits
    let digits = strNum.length;
    // store string 0 in a variable
    let zero = '0'
    // array of result that will later be joined to form a single string
    let result = [];
    
    for (i = 0; i < digits; i++) {
      // if the string at index i is not a zero continue else ignore and dont do anything
      if (strNum[i] !== '0') {
        // pushes the string number along with the correct number of zeros afterwards
        result.push(`${strNum[i]}${zero.repeat(digits - i - 1)}`)
      }
    }
    // returns the result variable joined into a single string connected with a space and + and space
    return result.join(' + ')
  }
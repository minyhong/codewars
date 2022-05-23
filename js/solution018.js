// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

function sumDigPow(a, b) {
    let result = [];
    
    //iterate through a through b
    for(i = a; i <= b; i++) {
      // convert the number into a string and split each char into an array
      let strArrNum = String(i).split('');
      // counter to store the sum of each digit to their corresponding power
      let sum = 0;
      // iterate through each digit/element in the array
      strArrNum.forEach((elem, index) => {
        // add to our counter the power of the elem to it's index+1 place
        sum += Math.pow(+elem, index + 1)
      })
      // if the final sum is equal to the inital i variable/value, then add to the result array
      if (sum === i) result.push(i)
    }
    return result
  }
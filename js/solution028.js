// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// I want to say this code should also work and in my newbie view it seems the most efficient as it should filter out repeated values in the while loop but it would time out on me. I checked on the browsers console to check to see each test works nd they all worked just fine. maybe it is bad/ineffiient code
// function findUniq(arr) {
//   let result;
//   while (!result) {
//     let val = arr.shift();
//     if (arr.find(elem => elem = val)) {
//       arr = arr.filter(el => el !== val)
//     } else {
//       result = val
//     }
//   }
//   return result
// }

// This is the alternative i came up with that didnt time out
function findUniq(arr) {
    let result;
    // sorts list in numerical order from smallest to greatest number
    arr.sort((a, b) => a - b);
    arr.forEach((elem, index) => {
      // checks to see if the element is unique and different from the element before and after it
      if (elem !== arr[index-1] && elem !== arr[index+1]) {
        result = elem
      }
    })
    return result
  }
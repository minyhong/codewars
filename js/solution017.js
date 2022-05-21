// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    let result = [];
    
    // iterate through array
    numbers.forEach((elem, index, array) => {
      // store difference of the target and elem in variable
      let difference = target - elem;
      // clone array as to not mutate original
      let newArray = array.slice();
      // remove the element at the index
      newArray.splice(index, 1)
      // if the indexOf difference exists in the new/cloned array 
      if (newArray.indexOf(difference) !== -1) {
        // push the index to the result array
        result.push(index);
        // push the index of the difference found in the original array
        result.push(array.indexOf(difference));
      }
    })
    // not sure how to stop and return once result reaches just two elements. tried a while loop but timed out... i really need to get my while loops down... thats the one thing I really struggle with...
    result = [...new Set(result)]
    return result
  }
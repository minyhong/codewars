//Delete occurrances of an element if it occurs more than n times

function deleteNth(arr,n){
    // ...
    let numOf = {};
    let result = [];
    
    arr.forEach(elem => {
      //creates an object to keep tally of each number from the array either incrementing the value or creating it as 1 if it already doesnt exist    
      numOf[elem] = numOf[elem] + 1 || 1;
      // checks to see if the values/tally of each number is equal or less than the n then pushes if true
      if (numOf[elem] <= n) {
        result.push(elem)
      }
    })
    return result
  }
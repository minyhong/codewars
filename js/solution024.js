// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

let uniqueInOrder = function(iterable) {
    let result = [];
    // because parameters can be either a string or an array, if it is not an array, make into array
    if (!Array.isArray(iterable)) {
      iterable = iterable.split('');
    }
    // iterate through the array, if the element isn't the last element in the result array, push it
    iterable.forEach(elem => {
      if (elem !== result[result.length-1]) {
        result.push(elem)
      }
    })
    return result
  }
// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    // Creates new clone of numbers array that will be returned once the smallest integer is removed
    let result = numbers.slice();
    // Creates a second clone of numbers that will be manipulated to find smallest integer
    let secondNumbers = numbers.slice();
    // sorts the clone array
    let orderedNumbers = secondNumbers.sort((a, b) => a - b);
    // first indexed element should be smallest integer, store in variable
    let lowestVal = orderedNumbers[0];
    // find the index of the lowestVal in the first clone and store in varible
    let removeIndex = result.indexOf(lowestVal);
    // remove splice the cloned array and remove the element at index removeIndex
    result.splice(removeIndex, 1)
    // return the newly spliced array
    return result
  }
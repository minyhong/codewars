// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    // create a clone of the numbers array
    let result = numbers.slice()
    // order the new array
    let orderedNumbers = result.sort((a , b) => a - b)
    // first element (index 0) of the new sorted array should be the smallest integer
    let lowestVal = orderedNumbers[0]
    // find the lowest value in the original array and return the index of it
    let removeIndex = numbers.indexOf(lowestVal)
    // remove the one index and splice together
    numbers.splice(removeIndex, 1)
    return numbers
    
}
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    // create an array of unique elements of text
    let setText = [... new Set(text.toLowerCase())]
    let result = [];
    // iterate through the setText array and if the index of that element is not the last index then push it into result
    setText.forEach(elem => {
      if(text.toLowerCase().indexOf(elem) !== text.toLowerCase().lastIndexOf(elem)) {
        result.push(elem)
      }
    })
    // length of the result variable will give you the number of all the duplicate letters/numbers
    return result.length
  }
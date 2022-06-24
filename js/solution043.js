// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


function revrot(str, sz) {
    let result = [];
    console.log(str)
  
    if (sz <= 0 || str === "" || sz > str.length) {
      return result.join('')
    } else {
        for (let i = 0, j = sz; i < str.length, j < str.length; i += sz, j += sz) {
          result.push(str.slice(i, j))
        }
        let newResult = result.map(elem => {
            if (sumOfCubesModTwo(elem)) {
                return reverse(elem)
            } else {
                return rotate(elem)
            }
        })
        result = newResult
    }
    return result.join('')
}
// Function to rotate the first str onto the back/end of the string
function rotate(str) {
    let strArr = str.split('');
    let firstElem = strArr.shift();
    strArr.push(firstElem)
    return strArr.join('')
}

// Function to reverse a string
function reverse(str) {
    return str.split('').reverse().join('')
}

// Function to verify if the sum of individual integar of a string cubed is divisible by 2
function sumOfCubesModTwo(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let val = Number(str[i])
        sum += Math.pow(val, 3)
    }
    return sum % 2 === 0
}
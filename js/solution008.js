// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
    let stringArr = string.split('');
    let result = {};

    stringArr.forEach(elem => {
        if (result[elem]) { // if this key already exists increment by 1
            result[elem] += 1
        } else {    // else create new key and value pair in object
            result[elem ]= 1
        }
    })
    return result
}
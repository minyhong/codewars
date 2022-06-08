// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// Not gonna lie, this is hideous code lolz

function reverse(str){
    return str.split(' ').map((elem, index) => index % 2 === 1 ? reverseString(elem) : elem).join(' ').trim()
}
                       
function reverseString(str) {
    return str.split('').reverse().join('')
}
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let newObj = {};
    let result
    A.forEach(elem => {
        // for each element in arr, if key exist in newObj increment by one or create new key value object pair
        newObj[elem] ? newObj[elem] += 1 : newObj[elem] = 1
    })

    for (int in newObj) {
        if (newObj[int] % 2 === 1) {
            result = int
        }
    }

    return Number(result)
}
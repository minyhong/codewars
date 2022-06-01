function comp(array1, array2) {
    if (array1 === null || array2 === null) return false
    else {
      array1.sort((a, b) => a - b);
      array2.sort((a, b) => a - b);
      let squared = array1.map(elem => elem * elem)
      return squared.join('') === array2.join('')
    }
  }
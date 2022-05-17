function digPow(n, p){
  
    // takes the integer and turns into string to split each number into array
    let nArr = String(n).split('');
    
    // map through above nArr and turns back into number and puts to the power of p + i as instructed
    let newArr = nArr.map((elem, index) => {
      return Math.pow(Number(elem), (p + index))
    })
    
    // adds each elem in newArr together into one sum and divide by n and store in variable k
    let k = newArr.reduce((a, b) => a + b, 0) / n
    
    // if above k is a whole number then returns falsy thus returns k, if not returns -1
    return k % 1 ? -1 : k
}
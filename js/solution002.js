// Odd March Bits 8 bits (codewars)

function bitMarch (n) {
    let finalArr = [];
    let numOfIter = 9 - n;
      
    for (let i = 0; i < numOfIter; i++) {
      let innerArr = [0, 0, 0, 0, 0, 0, 0, 0];
      finalArr.push(innerArr.fill(1, innerArr.length - n-i, innerArr.length - i))
    }
    return finalArr
  }
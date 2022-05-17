// Your order, please

function order(words) {
    let result = [];
    let newArr = words.split(' ');
    
    for (i = 1; i <= newArr.length; i++) {
      newArr.forEach(elem => {
        if (elem.includes(i)) {
          result.push(elem);
        }
      })
    }
    return result.join(' ')
  }
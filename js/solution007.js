//replace with alphabet position

function alphabetPosition(text) {
    let arr = [];
    let textArr = text.toLowerCase().split('');
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    textArr.forEach(letter => {
      if (alpha.includes(letter)) {
        arr.push(alpha.indexOf(letter) + 1)
      }
    })
    return arr.join(' ')
  }
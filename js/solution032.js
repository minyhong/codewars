function correct(string) {
    let result = '';
      string.split('').forEach(elem => {
      if (elem === '5') {
        result += 'S'
      } else if (elem === '0') {
        result += 'O'
      } else if (elem === '1') {
        result += 'I'
      } else {
        result += elem
      }
    })
    return result
  }
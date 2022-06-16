// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
    let fullNameArr = s.split(';').map(elem => elem.split(':')).map(elem => elem.map(el => el.toUpperCase()))
    let result = '';
    
    fullNameArr.sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      else {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0
      }
    })
    fullNameArr.forEach(elem => {
      result += `(${elem[1]}, ${elem[0]})`;
    })
    console.log(fullNameArr)
    return result
  }
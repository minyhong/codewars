// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

function sqInRect(lng, wdth){
    if ( lng === wdth) return null;
    else {
      let result = [];
      let sideA = lng;
      let sideB = wdth;
      
      while (sideB > 0) {
        let min = Math.min(sideA, sideB);
        let max = Math.max(sideA, sideB);
        result.push(min)
        sideA = min;
        sideB = max - min
      }
      return result
    }
  }
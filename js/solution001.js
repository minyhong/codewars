// Turn with a compass (codewars)

function direction(facing, turn){
    // your code here
    let arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let startIndex = arr.indexOf(facing);
    let stepsOfTurns = (turn / 45) % 8;
    let newIndex = startIndex + stepsOfTurns
    
    if (newIndex >= 0) {
      return arr[newIndex % 8]
    } else if (newIndex < 0) {
      return arr[arr.length + newIndex]
    }
  }
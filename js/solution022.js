// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples

// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    let result = [];
    let ast = '*';
    let spaces = ' '
    let newLine = '\n'
    if (n % 2 == 0 || n < 0) {
      return null;
    } else {
        result.push(ast.repeat(n), newLine);
        for (i = n - 2; i >= 1; i -= 2) {
          result.unshift(spaces.repeat((n - i) / 2), ast.repeat(i), newLine);
          result.push(spaces.repeat((n - i) / 2), ast.repeat(i), newLine);
      }
    }
    return result.join('')
  }
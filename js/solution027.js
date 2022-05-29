// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let arrayTotalScore = [];
    
    x.split(' ').forEach(elem => {
      let totalScore = 0;
      for (i = 0; i < elem.length; i++) {
        let score = alpha.indexOf(elem[i]) + 1;
        totalScore += score
      }
      arrayTotalScore.push(totalScore)
    })
    let highestScore = Math.max(...arrayTotalScore);
    let highestScoringWord = arrayTotalScore.indexOf(highestScore);
    return x.split(' ')[highestScoringWord]
  }
// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");
   word = word.toLowerCase();
   return word;
}
let word = initialPrompt();


function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      }
    }
  }
  return letterPoints;
}
console.log(oldScrabbleScorer(word));
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// function initialPrompt() {
//   word = input.question("Let's play some scrabble! Enter a word: ");
//   word = word.toLowerCase();
//   return word;
// }

function simpleScorer(word) {
  let points = 0;
  for (i = 0; i < word.length; i++) {
    points++;
  }
  return points;
}
console.log(simpleScorer(word));

// let vowelBonusScorer;
function vowelBonusScorer(word) {
  let score = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    if (vowels.includes(letter)) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
}

console.log(vowelBonusScorer(word));

let scrabbleScorer;

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scoringFunction: simpleScorer
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are worth 3 point, consoanants are worth 1 point.',
      scoringFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoringFunction: oldScrabbleScorer
   }
];

function scorerPrompt() {
   // let scoringWord = input.question("Enter a word that you'd like to be scored: ");

console.log(`
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`)
let scoreChoice = input.question('Please enter which scoring function you want: ');

console.log(`Score for ${word}: ${scoringAlgorithms[scoreChoice].scoringFunction(word)}`)

   // scoringAlgo = input.question(`Select a scoring algorithm:\n0 - Simple Scorer\n1 - Vowel Bonus Scorer\n2 - Scrabble Scorer\n`);
   // if (scoringAlgo === 0){
   //    return simpleScorer(initialPrompt());
   // } else if (scoringAlgo === 1){
   //    return vowelBonusScorer(word);
   // } else if (scoringAlgo === 2){
   //    return oldScrabbleScorer(word);
   // }
   // console.log(`Score for ${word}: ${}`)
}
console.log(scorerPrompt())
function transform() {}

let newPointStructure = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};

function runProgram() {
//   initialPrompt();     I commented this out
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};

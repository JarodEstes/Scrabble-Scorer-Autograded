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

let word = '';

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word: ");
   word = word.toLowerCase();
   return word;
}

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
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function simpleScorer(word) {
  let points = 0;
  for (i = 0; i < word.length; i++) {
    points++;
  }
  return points;
}

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

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScorer
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are worth 3 point, consoanants are worth 1 point.',
      scorerFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scorerFunction: scrabbleScorer
   }
];

function scorerPrompt() {
  console.log("\nWhich scoring algorithm would you like to use? ");
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
  }
  let choice = Number(input.question("\nEnter: 0, 1, or 2: "));
  console.log(`\nScore for '${word}': ${scoringAlgorithms[choice].scorerFunction(word)}`)
}

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (let key in oldPointStructure){
    let letters = oldPointStructure[key];
    for (let letter of letters) {
      newPointStructure[letter.toLowerCase()] = Number(key);
    }
  }
  return newPointStructure;
  }

  let newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word){
  let score = 0;
  for (i = 0; i < word.length; i++) {
    score += newPointStructure[word[i]]
  }
  return score;
}


function runProgram() {
  initialPrompt();
  scorerPrompt();
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

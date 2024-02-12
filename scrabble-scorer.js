// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer() {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
// console.log(oldScrabbleScorer(initialPrompt()))
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = (input.question("Let's play some scrabble! Enter a word: "));
   return word;
};

let word = initialPrompt()
console.log(oldScrabbleScorer())


function simpleScorer() {
   let points = 0
   for (i = 0; i < word.length; i++) {
      points += 1
   }
   return points;
}
console.log(simpleScorer());

const vowels = ('aeiou');
const consonants = ('bcdfghjklmnpqrstvwxyz');[]

// let vowelBonusScorer;
function vowelBonusScorer() {
   let points = 0
   
   if (word.includes(vowels)){
      points += 3
   }  else if (word.includes(consonants)){
      points += 1
   }
   return points;
   }

   

console.log(vowelBonusScorer())

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   // initialPrompt();     I commented this out for now
   
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
	scorerPrompt: scorerPrompt
};

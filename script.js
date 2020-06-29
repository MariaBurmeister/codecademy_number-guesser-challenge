
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>
  Math.floor(Math.random()*10);



const compareGuesses = (pGuess, cGuess, targetN) => {

  const pDif = Math.abs(targetN - pGuess);
  const cDif = Math.abs(targetN - cGuess);
  return   pDif <= cDif;
}

const updateScore = winner => {

  winner === "human"?
    humanScore++
    :
    computerScore++;
}

const advanceRound = () =>
  currentRoundNumber++;

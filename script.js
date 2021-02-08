let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const getAbsoluteDistance = (num1, num2) => Math.abs(num1-num2);
const generateTarget = () => Math.floor(Math.random()*10);

function compareGuesses(human, computer, target){
  let differenceInHuman = getAbsoluteDistance(human, target);
  let differenceInComputer = getAbsoluteDistance(computer, target);

  if(human < 0 || human > 9){
    alert('You number is out of range, please enter only 0-9');
  }

  if(differenceInHuman < differenceInComputer){
    return true;
  } else {
    return false;
  }

  if(differenceInHuman === differenceInComputer){
    return true;
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
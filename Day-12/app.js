const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const result_draw = `DRAW`;
const player_wins = 'PLAYER WINS';
const computer_wins = 'computer wins';
let gameisrunning = false;


function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
        if ( selection !== ROCK && selection !== PAPER && selection !== SCISSORS   ) 
        
        {
          alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return ;
  }
  return selection;
}

const getComputerSelection = function(){
  const  randomvalue = Math.random();
  if(randomvalue < 0.34){
    return ROCK;
  } else if(randomvalue <0.64){
    return PAPER;

  } else{
    return SCISSORS;
  }

};

// const getwinner = function( pChoice , cChoice){
// if(cChoice === pChoice){
//   return result_draw;
// }else if(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS 
//   || cChoice ===SCISSORS && pChoice === ROCK){
// return player_wins;

// }else{
//   return computer_wins;
// }

// };

const getwinner = (pChoice = DEFAULT_USER_CHOICE, cChoice) =>
  cChoice === pChoice
    ? result_draw
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? player_wins
    : computer_wins;

startGameBtn.addEventListener('click', function() {
 

  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerselection = getComputerSelection();
  const winner = getwinner(playerSelection ,computerselection );

  console.log(winner);

  let message =  `you picked ${playerSelection} and  comp picked ${computerselection} therefore you`;
  if (winner === result_draw){
    message = message + '  had a draw';

  }else if(winner === player_wins){
    message = message + ' had a won';
  }else{
    message = message + ' had a lost';
  }
  alert(message);
});

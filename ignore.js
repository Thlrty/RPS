//if( (playerSelection === "rock" && computerSelection === "scissor") ){
//  console.log('Player won this round.')
//}
//
//else if( (playerSelection === "scissor" && computerSelection === "paper") ){
//  console.log('Player won this round.')
//}
//
//else if( (playerSelection === "paper" && computerSelection === "rock") ){
//  console.log('Player won this round.')
//}
//
//else if( (playerSelection === "scissor" && computerSelection === "rock") ){
//  console.log('The Machine won this round.')
//}
//
//else if( (playerSelection === "paper" && computerSelection === "scissor") ){
//  console.log('The Machine won this round.')
//}
//
//else if( (playerSelection === "rock" && computerSelection === "paper") ){
//  console.log('The Machine won this round.')
//}



//if (playerSelection === 'rock') {
//  if(computerSelection === 'rock') {
//    console.log('It\'s a tie.');
//  }
//  else if(computerSelection === 'paper') {
//    console.log('The Machine won this round.');
//  }
//  else if(computerSelection === 'scissor') {
//    console.log('Player won this round.');
//  }
//}

//if( ((playerSelection === "rock") && (computerSelection === "scissor")) || 
//    ((playerSelection === "scissor") && (computerSelection === "paper")) ||
//    ((playerSelection === "paper") && (computerSelection === "rock")) ) {
//  console.log('Player won this round.')
//}
//
//if ( ((playerSelection === "scissor") && (computerSelection === "rock")) || 
//          ((playerSelection === "paper") && (computerSelection === "scissor")) || 
//          ((playerSelection === "rock") && (computerSelection === "paper")) ) {
// console.log('The Machine won this round.')
//}
//
//if(  ((playerSelection === "rock") && (computerSelection === "rock")) || 
//          ((playerSelection === "scissor") && (computerSelection === "scissor")) || 
//          ((playerSelection === "paper") && (computerSelection === "paper")) ) {
// console.log('It\'s a tie.')
//}


---------------

/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rock Paper Scissors</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
  <div class="flex">
    <h1>Rock Paper Scissors</h1>
    <h2>Choose Your Weapon</h2>
    <h3>First To 5 Wins!</h3>

   
    <div class="optionBtn">
      <button id="0">Rock</button>
      <button id="1">Paper</button>
      <button id="2">Scissors</button>
    </div>

    <div class="labels">
      <span id="playerLabel">Player scores</span>
      <span id="compLabel">Computer scores</span>
    </div>
    

    <div class="scores">
      <div id="playerScore"></div>
      <div id="computerScore"></div>
    </div>

  <div><span id="resultsLabel">Results</label></div>
    

    <div id="roundResults"></div>

  <div>
    <button id="reset">Play Again!</button>
  </div>
   
  </div>
</body>
<script>
  const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
  
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      roundResults.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a Tie!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  optionBtn.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}
</script>  
</html>

*/
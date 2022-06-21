const container = document.querySelector('#container');
const btns = document.querySelectorAll('button');
const scores = document.querySelector('#scores');
const results = document.querySelector('#result');
let playerPoints = 0;
let computerPoints = 0;

btns.forEach((button) => {
  button.addEventListener('click', getPlayerChoice)
  });

//Function for 1 round between player and computer. Should include the if cases with the needed printout. Function must have 
//two parameters, the players selection and the computers selection. 
//Run conditional statements to see who wins the round


function round(playerSelection, computerSelection) {

    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        results.textContent = 'You win! Rock beats Scissors.'
        ++playerPoints;
      } else if (computerSelection == 'paper') {
        results.textContent = 'You lose:( Paper beats Rock.'
        ++computerPoints;
      } else {
        results.textContent = 'It\'s a tie.'
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        results.textContent = 'You win! Paper beats Rock.'
        ++playerPoints;
      } else if (computerSelection == 'scissors') {
        results.textContent = 'You lose:( Scissors beats Paper.'
        ++computerPoints;
      } else {
        results.textContent = 'It\'s a tie.'
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        results.textContent = 'You lose:( Rock beats Scissors.'
        ++computerPoints; 
      } else if (computerSelection == 'paper') {
        results.textContent = 'You win! Scissors beats Paper.'
        ++playerPoints;
      } else {
        results.textContent = 'It\'s a tie.'
      } 
    }
     
    scores.textContent = `You: ${playerPoints} The Machine: ${computerPoints}`
  }


  function getPlayerChoice(e) {
    let weapon = ['rock','paper','scissors'];
    let playerSelection= (e.target.id);
    let computerSelection = weapon[Math.floor(Math.random()*weapon.length)];
    playerChoice = e.target.textContent;
    round(playerSelection, computerSelection);
  }


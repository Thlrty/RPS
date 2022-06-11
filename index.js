//Create array with the available 'weapons'.

let weapon = ['rock','paper','scissors'];

//Function to return a choice selected at random by the computer.

function computerPlay() {
return weapon[Math.floor(Math.random()*weapon.length)];    
};

let computerSelection = computerPlay();

//Get player's selection and store in a variable

let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

//Function for 1 round between player and computer. Should include the if cases with the needed printout. Function must have 
//two parameters, the players selection and the computers selection. 
//Run conditional statements to see who wins the round


function round(playerSelection, computerSelection) {

    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        alert('Player wins.');
      } else if (computerSelection == 'The Machine wins.') {
        console.log('The Machine wins.');
      } else {
        console.log('It\'s a tie.');
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        console.log('Player wins.');
      } else if (computerSelection == 'scissors') {
        console.log('The Machine wins.');
      } else {
        console.log('It\'s a tie.');
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        console.log('The Machine wins.');
      } else if (computerSelection == 'paper') {
        console.log('Player wins.');
      } else {
        console.log('It\'s a tie.');
      } 
    }
  }

//display the choices made by the computer and the player and play a round.

console.log('You chose: ' + playerSelection);
console.log('The Machine chose: ' + computerPlay());

round(playerSelection, computerSelection);


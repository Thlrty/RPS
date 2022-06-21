function rps() {

  let playerPoints = 0;
  let computerPoints = 0;
  
  //Create array with the available 'weapons'.
  
  let weapon = ['rock','paper','scissors'];
  
  //Function to return a choice selected at random by the computer.
  
  function computerPlay() {
  return weapon[Math.floor(Math.random()*weapon.length)];    
  };
  
  //for loop to run for 5 rounds.
  for (let i = 0; i < 5; i++) {
  
    //Get player's selection and computer's selection and store in a variable
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    let computerSelection = computerPlay();
  
    //display the choices made by the computer and the player and play a round.
    console.log('You chose: ' + playerSelection);
    console.log('The Machine chose: ' + computerSelection);
  
    let play = round(playerSelection, computerSelection);
  
  
    //Conditional statements to add points to the winning party and display the current standings
    if(play === "win"){
      playerPoints++;
      console.log('Player: ' + playerPoints + ' vs ' + 'The Machine: ' + computerPoints);
    } else if(play === "loss"){
      computerPoints++;
      console.log('Player: ' + playerPoints + ' vs ' + 'The Machine: ' + computerPoints);
    }
      else {
        console.log('Player: ' + playerPoints + ' vs ' + 'The Machine: ' + computerPoints);
      }
  }
  
  if(playerPoints > computerPoints){
    console.log('');
    console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
  } else {
    console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
  }
  
  }
  
  
  
  //Function for 1 round between player and computer. Should include the if cases with the needed printout. Function must have 
  //two parameters, the players selection and the computers selection. 
  //Run conditional statements to see who wins the round
  
  
  function round(playerSelection, computerSelection) {
  
      if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
          console.log('Player wins.');
          return 'win';
        } else if (computerSelection == 'paper') {
          console.log('The Machine wins.');
          return 'loss';
        } else {
          console.log('It\'s a tie.');
          return 'tie';
        } 
      }
      if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
          console.log('Player wins.');
          return 'win';
        } else if (computerSelection == 'scissors') {
          console.log('The Machine wins.');
          return 'loss';
        } else {
          console.log('It\'s a tie.');
          return 'tie';
        } 
      }
      if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
          console.log('The Machine wins.');
          return 'loss';
        } else if (computerSelection == 'paper') {
          console.log('Player wins.');
          return 'win';
        } else {
          console.log('It\'s a tie.');
          return 'tie';
        } 
      }
    }
  
    rps();






/* Ignore Everything Below
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
//} */
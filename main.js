let userChoice
let computerChoice
let winner

function getComputerChoice() {
  computerChoice = Math.random()*1
  
  if (computerChoice >=0 && computerChoice <0.33) 
    { 
      computerChoice = 'rock';
    return computerChoice;
  }
  else if (computerChoice>=0.33 && computerChoice<0.66)
    { 
      computerChoice = 'paper';
    return computerChoice;
  }
  else (computerChoice >=0.66 && computerChoice < 1)
  { 
    computerChoice = 'scissor'
    return computerChoice;
  }
  
}

function getWinner() {
  if (computerChoice === userChoice) {
     winner= "That's a Tie!"
  } else if  (
      (computerChoice === 'rock' && userChoice === 'paper') || 
      (computerChoice === 'paper' && userChoice === 'scissor') || 
      (computerChoice === 'scissor' && userChoice === 'rock')
    ) {
      winner = 'You Win!'
    } else {
      winner = 'Computer Win!'
    }
  }
  
function useChoice(userChoice) {
  console.log(userChoice)
  computerChoice=getComputerChoice()
  console.log(computerChoice)
  getWinner()
  let container = document.getElementById('Result');
  let paragraph = container.querySelector('p');
  paragraph.textContent = winner;
}



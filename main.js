let userChoice
let computerChoice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function declareWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie! 🤜🤛";
  } 
  if ((userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "scissor" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")) {
    return `You win!🎉 ${capitalize(userChoice)} beats ${computerChoice}.`;
  } else {
    return `You lose!😢 ${capitalize(computerChoice)} beats ${userChoice}.`;
  }
}

function playGame(choice) {
  userChoice = choice;
  computerChoice = getComputerChoice();
  const result = declareWinner(userChoice, computerChoice);
  document.getElementById("userC").textContent = `${capitalize(userChoice)}!`;
  document.getElementById("compC").textContent = `${capitalize(computerChoice)}!`;
  document.getElementById("result").textContent = `${result}`;
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

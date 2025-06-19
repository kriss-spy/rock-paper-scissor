// to get a random choice in rock, paper, and scissors, from computer
function getComputerChoice() {
  // get a random number between 0 and 1
  rnd = Math.random();
  // if less than 1/3, choice is rock
  if (rnd < 1 / 3) {
    return "rock";
  }
  // else if less than 2/3, choice is paper
  else if (rnd < 2 / 3) {
    return "paper";
  }
  // else, choice is scissors
  else {
    return "scissors";
  }
}

// keep track of scores
let humanScore = 0;
let computerScore = 0;

// to play one round
function playRound(humanChoice, computerChoice) {
  // take human choice and computer choice
  // decide who wins
  let winner = null;
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "scissors") {
    winner = "human";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    winner = "human";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    winner = "human";
  } else if (humanChoice == computerChoice) {
    winner == null;
  } else {
    winner = "computer";
  }

  // add winner's score by 1
  if (winner == "human") {
    humanScore++;
    console.log(`you win! ${humanChoice} beat ${computerChoice}`);
  } else if (winner == "computer") {
    computerScore++;
    console.log(`you lose! ${computerChoice} beat ${humanChoice}`);
  } else {
    console.log("tie!");
  }
}

function gameClear() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
}
// to get user choice, add an event listener for three buttons
// when click, assign value to humanChoice based on clicked button
// call playROund
let round = 0;
let board = document.querySelector("#board");
let boardDisplay = "";

let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else {
    let buttonClicked = e.target.id;
    // console.log(buttonClicked);
    playRound(buttonClicked, getComputerChoice());
    round++;
    if (round >= 5 && humanScore > computerScore) {
      boardDisplay = "YOU WIN!";
      gameClear();
    } else if (round >= 5 && computerScore > humanScore) {
      boardDisplay = "YOU LOSE!";
      gameClear();
    } else if (round >= 5 && humanScore == computerScore) {
      boardDisplay = "TIE!";
      gameClear();
    } else {
      boardDisplay = `${humanScore} (you) vs. ${computerScore} (computer)`;
    }
    board.textContent = boardDisplay;
  }
});
// to play games of five rounds

// display humanScore and computerScore

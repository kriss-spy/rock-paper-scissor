// console.log('Hello World');

// to get a random choice in rock, paper, and scissors, from computer
function getComputerChoice(){

    // get a random number between 0 and 1
    rnd = Math.random();
    // if less than 1/3, choice is rock
    if (rnd < 1/3) {
        return "rock";
    }
    // else if less than 2/3, choice is paper
    else if (rnd < 2/3) {
        return "paper";
    }
    // else, choice is scissors
    else {
        return "scissors";
    }
    
}

// for (let i=0;i<10;i++) {
//     console.log(getComputerChoice());
// }

// to get user choice
function getHumanChoice() {
    // prompt user to input a choice
    let userChoice = prompt("input your choice: ")
    // return the choice
    return userChoice;
}

// console.log(getUserChoice());

// keep track of scores
let humanScore = 0;
let computerScore = 0;

// to play one round
function playRound(humanChoice, computerChoice) {
    // take human choice and computer choice
    // decide who wins
    let winner = null;
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "scissors") {
        winner = "human";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        winner = "human";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        winner = "human";
    }
    else if (humanChoice == computerChoice) {
        winner == null;
    }
    else {
        winner = "computer";
    }
    
    // add winner's score by 1
    if (winner == "human") {
        humanScore++;
        console.log(`you win! ${humanChoice} beat ${computerChoice}`);
    }
    else if (winner == "computer") {
        computerScore++;
        console.log(`you lose! ${computerChoice} beat ${humanChoice}`);
    }
    else {
        console.log('tie!');
    }

}


// to play games of five round
function playGame(){
    // init scores
    // play one round
    // repeat for five rounds at total
    for (let i=0;i<5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    // log scores
    console.log(`game! human score is ${humanScore} and computer score is ${computerScore}`);
}

playGame();
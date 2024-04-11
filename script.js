let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    let roundedNumber = Math.floor(randomNumber);

    if (roundedNumber === 2) {
        return "scissors";
    } else if (roundedNumber === 1) {
        return "rock";
    } else {
        return "paper";
    }
}
;

function playRound(ComputerChoice, playerSelection)  {
    if (ComputerChoice == playerSelection) {
        return "it is a tie"
    }
    else if ((ComputerChoice == "paper" && playerSelection == "scissors" ) 
    || (ComputerChoice == "rock" && playerSelection == "paper")
    || (ComputerChoice == "scissors" && playerSelection == "rock"))
    {   playerScore++;
        return "you win, computer loses"
    }
    else {
        computerScore++;
        return "computer wins, you lose"
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors").toLowerCase()
        let computerChoice = getComputerChoice()
        let result = playRound(computerChoice, playerSelection);
        console.log(result);
    }

    if (computerScore > playerScore) {
        return "The computer won the game";
    } else if (computerScore < playerScore) {
        return "You won the game";
    } else {
        return "It is a total tie";
    }
}

console.log(playGame())
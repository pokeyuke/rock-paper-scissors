function getComputerChoice() {
    let RandomNumber = Math.random() * 3
    let RoundedNumber = Math.ceil(RandomNumber);

    if ( RoundedNumber === 3 ) {
        return  "paper"
    }
    else if ( RoundedNumber === 2 ) {
        return  "rock"
    }
    else {
        return "scissors"
    };

}

let playerSelection = prompt("Choose rock, paper or scissors").toLowerCase()

function playRound(getComputerChoice, playerSelection) {
    if (getComputerChoice === playerSelection ) {
        playerScore++
        return "it's a tie"
    }
    else if ((getComputerChoice === "rock" && playerSelection === "paper") ||
            (getComputerChoice === "scissors" && playerSelection === "rock") ||
            (getComputerChoice === "paper" && playerSelection === "scissors") ) {
            computerScore++
            return "Very nice! You have won" }
    else return "What a pity! You lose"
}

console.log(playRound(getComputerChoice(), playerSelection))

function playGame() {
    let computerScore = 0
    let playerScore = 0

    for (let i = 1; i <= 5; ++i)

    if (playerScore > computerScore) {
        return "you won"
    }
    else return "you lost"
}
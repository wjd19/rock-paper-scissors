function getComputerChoice() {
    let choice = Math.random()
    if (choice <= .33) {
        return "rock"
    }
    else if (choice >= .67) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
    
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors!")
    return choice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        return
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        return
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        return
    }

    else if (humanChoice == computerChoice) {
        console.log("You tied! Go again!")
        return
    }

    else {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        return
    }
}

function playGame() {
    let round = 0
    while (round < 5) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        round = humanScore + computerScore
    }
}

playGame()

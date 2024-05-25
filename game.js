let humanScore = 0;
let computerScore = 0;
let round = 0;


// basic game functions below

function getComputerChoice() {
    let choice = Math.random()
    if (choice <= .33) {
        let computerChoice = "rock";
        return computerChoice;
    }
    else if (choice >= .67) {
        let computerChoice = "paper";
        return computerChoice;
    }
    else {
        let computerChoice = "scissors";
        return computerChoice;
    }
}


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


// Adding event listeners to each button
function alertRock() {
    alert("You chose rock!");
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playGame();
}

function alertPaper() {
    alert("You chose paper!");
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function alertScissors() {
    alert("You chose scissors!");
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", alertRock);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", alertScissors);

const paper = document.querySelector("#paper");
paper.addEventListener("click", alertPaper);


function playGame() {
    
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", alertRock);

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", alertScissors);

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", alertPaper);
    
    round = humanScore + computerScore;
    
    if (round >= 5) {
        alert("Game over!");
    }
}

playGame()
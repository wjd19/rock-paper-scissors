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

// these next three functions will go inside of event listeners
function alertRock() {
    round = humanScore + computerScore;
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(round);
}

function alertPaper() {
    round = humanScore + computerScore;
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function alertScissors() {
    round = humanScore + computerScore;
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

// check score at end of each round to see if series is over
function finalScore(humanScore, computerScore) {
    if (round >= 4) {
        if (humanScore > computerScore) {
            alert('Congrats! You win the series!');
        }
        else {
            alert('Boooooo! You lose the series!');
        }
        const score = document.createElement("div");
        score.classList.add("score");
        score.textContent = `Final score: You: ${humanScore} Opponent: ${computerScore}`;
        container.appendChild(score);
    }
    round = 0;
    return;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice}!`)
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        alert(`You win! ${humanChoice} beats ${computerChoice}!`)
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        alert(`You win! ${humanChoice} beats ${computerChoice}!`)
    }

    else if (humanChoice == computerChoice) {
        alert("You tied! Go again!")
    }

    else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}!`)
    }

    //container to display results on page
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = `You have ${humanScore} points. Your opponent has ${computerScore} points.`;
    container.appendChild(content);

    //check score
    finalScore(humanScore, computerScore);
    return;
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", alertRock);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", alertScissors);

const paper = document.querySelector("#paper");
paper.addEventListener("click", alertPaper);


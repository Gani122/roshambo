function getComputerChoice() {
    let choice = "";
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        choice = 'ROCK'
    }
    else if (randomNum === 1) {
        choice = 'PAPER'
    }
    else {
        choice = 'SCISSORS'
    }

    return choice;
}

function shoot(playerSelection, computerSelection) {
    let round = "";

    if (playerSelection === computerSelection) {
        round = "Tie!"
    }
    else if (playerSelection === 'ROCK' && computerSelection === "PAPER") {
        round = "You Lose! Paper beats Rock"
    }
    else if (playerSelection === 'ROCK' && computerSelection === "SCISSORS") {
        round = "You Win! Rock beats Scissors"
    }
    else if (playerSelection === 'PAPER' && computerSelection === "SCISSORS") {
        round = "You Lose! Scissors beats Paper"
    }
    else if (playerSelection === 'PAPER' && computerSelection === "ROCK") {
        round = "You Win! Paper beats Rock"
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === "ROCK") {
        round = "You Lose! Rock beats Scissors"
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === "PAPER") {
        round = "You Win! Scissors beats Paper"
    }
    
    return round;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log (shoot(playerSelection.toUpperCase(), computerSelection));
console.log(playerSelection, computerSelection);

function game() {

}
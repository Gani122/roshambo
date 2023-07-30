let playerScore = 0;
let cpuScore = 0;

const scoreDisplay = document.querySelector('#score');
const scoreMsg = document.querySelector('#msg');
const results = document.querySelector('#results');


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
        round = "You Lose! Rock loses to Paper"
    }
    else if (playerSelection === 'ROCK' && computerSelection === "SCISSORS") {
        round = "You Win! Rock beats Scissors"
    }
    else if (playerSelection === 'PAPER' && computerSelection === "SCISSORS") {
        round = "You Lose! Paper loses to Scissors"
    }
    else if (playerSelection === 'PAPER' && computerSelection === "ROCK") {
        round = "You Win! Paper beats Rock"
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === "ROCK") {
        round = "You Lose! Scissors loses to Rock"
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === "PAPER") {
        round = "You Win! Scissors beats Paper"
    }

    return round;
}

function game(btn) {
    
    if(playerScore !== 5 && cpuScore !== 5) {
        const playerSelection = btn;
        const computerSelection = getComputerChoice();
        
        if(playerSelection !== null){
            
            let score = shoot(playerSelection.toUpperCase(), computerSelection);

            if(score.indexOf("You Win") === 0){
                playerScore++;
            }
            else if(score.indexOf("You Lose") === 0){
                cpuScore++
            }

            scoreMsg.textContent = score;
            if (score.indexOf("Tie")=== -1){
                scoreDisplay.textContent = "Score: " + playerScore + " - " + cpuScore;
            }
        }
    }
    else {
        document.getElementById('rock').setAttribute("disabled", "disabled");
        document.getElementById('paper').setAttribute("disabled", "disabled");
        document.getElementById('scissors').setAttribute("disabled", "disabled");
        if (playerScore > cpuScore){
            results.textContent = "You beat the Computer! Good job";
        }
        else if(cpuScore > playerScore){
            results.textContent = "You lost to the Computer. Better luck next time";
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});
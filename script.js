let playerScore = 0;
let cpuScore = 0;

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
    
    //while(playerScore !== 5 && cpuScore !== 5) {
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

            console.log(score);
            if (score.indexOf("Tie")=== -1){
                console.log("Score: " + playerScore + " - " + cpuScore);
            }
        }
    //}
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});

if (playerScore > cpuScore){
    console.log("You beat the Computer! Good job")
}
else if(cpuScore > playerScore){
    console.log("You lost to the Computer. Better luck next time");
}
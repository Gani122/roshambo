function getComputerChoice() {
    let choice = "";
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        choice = 'rock'
    }
    else if (randomNum === 1) {
        choice = 'paper'
    }
    else {
        choice = 'scissors'
    }

    return choice;
}

function shoot(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection, playerSelection);
//console.log (shoot(playerSelection, computerSelection));

function game() {

}
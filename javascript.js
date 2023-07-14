let choices = ['Rock', 'Paper', 'Scissor'];

let playerSelection = choices[1];
let computerSelection = getComputerChoice();

let computerWin = `You Lose! ${computerSelection} beats ${playerSelection}`;
let playerWin = `You Win! ${playerSelection} beats ${computerSelection}`;

function getComputerChoice() {
    return choices[randomise(3)];
}

function randomise(num) {
    return Math.floor(Math.random() * num);
}

function playGame(playerChoice, computerChoice) {
    if((computerChoice === 'Rock') && (playerChoice === 'Scissor')) {
        return computerWin;
    }
    else if((computerChoice === 'Paper') && (playerChoice === 'Rock')) {
        return computerWin;
    }
    else if((computerChoice === 'Scissor') && (playerChoice === 'Paper')) {
        return computerWin;
    }
    else if(computerChoice === playerChoice){
        return 'Its a Tie! Play again.';
    }
    else {
        return playerWin;
    }
}



console.log(playGame(playerSelection,computerSelection));
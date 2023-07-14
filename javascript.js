let choices = ['Rock', 'Paper', 'Scissor'];

let computerWins = 0
  , playerWins = 0; 

function getComputerChoice() {
    return choices[randomise(3)];
}

function randomise(num) {
    return Math.floor(Math.random() * num);
}

function playGame(playerChoice, computerChoice,) {

    let computerWin = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let playerWin = `You Win! ${playerChoice} beats ${computerChoice}`;

    if((computerChoice === 'Rock') && (playerChoice === 'Scissor')) {
        computerWins ++;
        return computerWin;
    }
    else if((computerChoice === 'Paper') && (playerChoice === 'Rock')) {
        computerWins ++;
        return computerWin;
    }
    else if((computerChoice === 'Scissor') && (playerChoice === 'Paper')) {
        computerWins ++;
        return computerWin;
    }
    else if(computerChoice === playerChoice){
        return 'Its a Tie! Play again.';
    }
    else {
        playerWins ++;
        return playerWin;
    }
}

function decideWinner() {

    if (computerWins > playerWins) {
        return 'Computer won the game!'; 
    }
    else if (playerWins > computerWins) {
        return 'You win the game';
    }
    else {
        return 'Its a tie! No winners';
    }
}

function capitalise(str) {
    return (str.charAt(1).toUpperCase()) + str.slice(1);
}

function game() {
    for (let i = 1; i<=5; i++) {
        let playerSelection = capitalise(prompt("What is your play? (Rock / Paper / Scissors"));
        console.log(playGame(playerSelection, getComputerChoice()));
    }

    console.log('Game Summary');
    console.log(`You won ${playerWins} times, the Computer won ${computerWins} times`);
    console.log(decideWinner());
}

game();
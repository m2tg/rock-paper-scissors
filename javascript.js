let choices = ['Rock', 'Paper', 'Scissor'];

let computerWins = 0
  , playerWins = 0; 

function getComputerChoice() {
    return choices[randomise(3)];
}

function startGame (event) {
    let playerSelection = event.getAttribute('data-value');
    let messageDiv = document.querySelector('.gameMessage');

    messageDiv.textContent = playGame(playerSelection, getComputerChoice());
    updateScoreCard();
    if(computerWins === 5 || playerWins === 5) {    
        messageDiv.textContent = `Game Over! ${decideWinner()}`;
        document.querySelectorAll('button').forEach( (element) =>{
            element.remove();
        });
    }
}

function updateScoreCard(str) {
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');

    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;    
}

function randomise(num) {
    return Math.floor(Math.random() * num);
}

function playGame(playerChoice, computerChoice,) {

    let computerWinMessage = `You Lose! ${computerChoice} beats ${playerChoice}`;
    let playerWinMessage = `You Win! ${playerChoice} beats ${computerChoice}`;

    if( (computerChoice === 'Rock') && (playerChoice === 'Scissor') ||
        (computerChoice === 'Paper') && (playerChoice === 'Rock') ||
        (computerChoice === 'Scissor') && (playerChoice === 'Paper')) 
    {
        computerWins ++;
        updateScoreCard('c');
        return computerWinMessage;
    }
    else if(computerChoice === playerChoice){
        return 'Its a Tie! Play again.';
    }
    else {
        playerWins ++;
        return playerWinMessage;
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

const btns = document.querySelectorAll('button');

btns.forEach( (button) => {
    button.addEventListener('click', function (e){
        startGame(button);
    });
});
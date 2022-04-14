let playerScore = 0;
let computerscore = 0;
let roundWinner = '';
const playerScoreObject = document.querySelector('.js-player-score');
const comScoreObject = document.querySelector('.js-com-score');


function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[random];
}

function playRound(computerSelection, playerSelection) {
    const playerWins =
        computerSelection === 'Rock' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Scissor' ||
        computerSelection === 'Scissor' && playerSelection === 'Rock';
    const computerWins =
        computerSelection === 'Rock' && playerSelection === 'Scissor' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissor' && playerSelection === 'Paper';


    if (computerSelection === playerSelection) roundWinner = 'tie';

    if (computerWins) {
        roundWinner = 'computer';
        computerscore++;
    }

    if (playerWins) {
        roundWinner = 'player';
        playerScore++;
    }

    outputResult(roundWinner, computerSelection, playerSelection);
}

function outputResult(winner, comSelection, playerSelection) {
    const comChoice = document.querySelector('.js-com-choice');
    comChoice.innerText = comSelection;

    const result = document.querySelector('.js-result');
    if (winner === 'player') result.innerText = `You Win! ${playerSelection} beats ${comSelection}`;
    if (winner === 'computer') result.innerText = `You Lose! ${playerSelection} gets beaten ${comSelection}`;
    if (winner === 'tie') result.innerText = `You both tied`;

    updateScore();
    checkForWinner();
}



function initButtons() {
    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            playRound(computerPlay(), e.target.innerText)
        })
    });
}

function updateScore() {
    playerScoreObject.innerText = playerScore;
    comScoreObject.innerText = computerscore;
}

function checkForWinner() {

    const finalScore = document.querySelector('.js-final-score');

    if ((playerScore === 5) && (playerScore > computerscore)) {
        finalScore.innerText = `You win with ${playerScore} point(s), while the computer has ${computerscore} point(s)`;
    }

    if ((playerScore < computerscore) && (computerscore === 5)) {
       finalScore.innerText = `You lose with ${playerScore} point(s), while the computer has ${computerscore} point(s)`;
    }
}

function game() {
    initButtons();
    updateScore();
}

game();
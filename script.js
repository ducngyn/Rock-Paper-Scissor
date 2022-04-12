let roundWinner = '';
let playerScore = 0;
let computerscore = 0;

function computerPlay() {
    const computerChoices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * computerChoices.length);

    return computerChoices[random];
}

function playRound(computerSelection, playerSelection) {
    const playerSelectionLow = playerSelection.toString().toLowerCase();
    const playerWins =
    computerSelection === 'rock' && playerSelectionLow === 'paper' ||
    computerSelection === 'paper' && playerSelectionLow === 'scissor' ||
    computerSelection === 'scissor' && playerSelectionLow === 'rock';
    const computerWins =
    computerSelection === 'rock' && playerSelectionLow === 'scissor' ||
    computerSelection === 'paper' && playerSelectionLow === 'rock' ||
    computerSelection === 'scissor' && playerSelectionLow === 'paper';
    
    if (!['rock', 'paper', 'scissor'].includes(playerSelectionLow)) {
        console.log('invalid value');
        return;
    }
    
    if (computerSelection === playerSelectionLow) roundWinner = 'tie';

    if (computerWins) {
        roundWinner = 'computer';
        computerscore++;
    }

    if (playerWins) {
        roundWinner = 'player';
        playerScore++;
    }

    outputResult(roundWinner, computerSelection, playerSelectionLow);
}

function outputResult(winner, comSelection, playerSelection) {
    if (winner === 'player') {
        console.log(`You Win! ${playerSelection} beats ${comSelection}`)
    }

    if (winner === 'computer') {
        console.log(`You Lose! ${playerSelection} gets beaten ${comSelection}`)
    }

    if (winner === 'tie') {
        console.log(`You both tied`)
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('please input a value');
        const computerselection = computerPlay();
        playRound(computerselection, playerSelection)
    }

    if (playerScore > computerscore) console.log(`You win with ${playerScore} point(s), while the computer has ${computerscore} point(s)`)
    if (playerScore < computerscore) console.log(`You lose with ${playerScore} point(s), while the computer has ${computerscore} point(s)`)
    if (playerScore > computerscore) console.log(`You tie with ${playerScore} point(s)`)
}

game();
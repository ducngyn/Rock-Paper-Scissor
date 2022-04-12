let roundWinner = '';
let playerScore = 0;
let computerscore = 0;


function computerPlay() {
    const computerChoices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[random]
}

function playRound(computerSelection, playerSelection) {

    const playerSelectionLow = playerSelection.toLowerCase();

    if (computerSelection === playerSelectionLow) roundWinner = 'tie';

    if (
        computerSelection === 'rock' && playerSelectionLow === 'scissor' ||
        computerSelection === 'paper' && playerSelectionLow === 'rock' ||
        computerSelection === 'scissor' && playerSelectionLow === 'paper') {
        roundWinner = 'computer';
    }

    if (
        computerSelection === 'rock' && playerSelectionLow === 'paper' ||
        computerSelection === 'paper' && playerSelectionLow === 'scissor' ||
        computerSelection === 'scissor' && playerSelectionLow === 'rock') {
        roundWinner = 'player';
    }

    outputResult(roundWinner, computerSelection, playerSelectionLow)

}

function outputResult(winner, comSelection, playerSelection) {
    if (winner === 'player') {
        console.log(`You Win! ${playerSelection} gets beaten by ${comSelection}`)
    }
    
    
    if (winner === 'computer') {
        console.log(`You Lose! ${playerSelection} beats ${comSelection}`)
    }

}

const playerSelection = 'Rock';
const computerselection = computerPlay();

playRound(computerselection, playerSelection)
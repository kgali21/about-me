import compareNumbers from './number-guess.js';

const generate = document.getElementById('generate');
const guessDisplay = document.getElementById('guess-display');
const userInput = document.getElementById('number-enter');
const triesDisplay = document.getElementById('tries-display');

let correctNumber = Math.floor(Math.random() * 20);
let triesRemaining = 4;
let msg = 'You have ' + triesRemaining + ' tries remaining!';

triesDisplay.textContent = msg;

generate.addEventListener('click', () => {
    let userGuess = userInput.value;

    triesRemaining += -1;

    triesDisplay.textContent = 'You have ' + triesRemaining + ' tries remaining';

    let correctResponse = 'your guess is ' + userGuess + '. You guessed the correct number!';
    let tooLowResponse = 'your guess is ' + userGuess + '. You guessed too low, try again...'; 
    let tooHighResponse = 'your guess is ' + userGuess + '. You guessed too high, try again...';
    let incorrectResponse = 'Game Over...';
    
    compareResults(userGuess, correctResponse, tooLowResponse, tooHighResponse);

    if(triesRemaining === 0){
        guessDisplay.textContent = incorrectResponse;
        generate.disabled = true;
    }    
});

function compareResults(userGuess, correctResponse, tooLowResponse, tooHighResponse) {
    if(compareNumbers(parseInt(userGuess), correctNumber) === 0) {
        guessDisplay.textContent = correctResponse;
        generate.disabled = true;
    }
    else if(compareNumbers(parseInt(userGuess), correctNumber) === -1) {
        guessDisplay.textContent = tooLowResponse;
    }
    else if(compareNumbers(parseInt(userGuess), correctNumber) === 1) {
        guessDisplay.textContent = tooHighResponse;
    }
}
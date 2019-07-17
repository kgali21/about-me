import compareNumbers from './number-guess.js'

const generate = document.getElementById('generate');
const guessDisplay = document.getElementById('guess-display');

let correctNumber = 4;

generate.addEventListener('click', () => {


    guessDisplay.textContent = compareNumbers(userGuess, correctNumber);

});


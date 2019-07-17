import compareNumbers from './number-guess.js'

const generate = document.getElementById('generate');
const guessDisplay = document.getElementById('guess-display');

let correctNumber = 4
let increment = 1;
let triesRemaining = 4;
let decrease =  userGuess -= increment;



generate.addEventListener('click', () => {
    let userGuess = userGuess.value;

    triesRemaining = -1;



    let correctResponse = 'your guess is ' + userGuess + '. You guessed the correct number!'
    let tooLowResponse = 'your guess is ' + userGuess + '. You guessed too low, try again...' 
    let tooHighResponse = 'your guess is ' + userGuess + '. You guessed too high, try again...'

    if(compareNumbers(userGuess, correctNumber) === -1){;
    decrease;
    return guessDisplay.textContent = compareNumbers(tooLowResponse);}

    if(compareNumbers(userGuess, correctNumber) === 0){;
    return guessDisplay.textContent = compareNumbers(correctResponse);} 
        
    if(compareNumbers(userGuess, correctNumber) === 1){;
    increment;
    return guessDisplay.textContent = compareNumbers(tooHighResponse);}    

        


});


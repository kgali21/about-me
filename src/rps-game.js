import getThrow from './get-throw.js';


const throwButton = document.getElementById('throw');
const winImage = document.getElementById('winning-image');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');

let wins = 0;
let losses = 0;
let draws = 0;

throwButton.addEventListener('click', () => {
    const cpuChoice = getThrow();
   
    winImage.classList.remove('invisible');
    const src = 'assets/weapons/' + cpuChoice + '.jpg';
    winImage.src = src;

    const weaponButton = document.querySelector('input:checked');
    const userChoice = weaponButton.value;
    

    if(userChoice === cpuChoice){
        message.textContent = 'draw';
        draws++;
        drawCount.textContent = draws;
    } else if(weaponButton.value === 'rock' && cpuChoice === 'scissors') {
        message.textContent = 'you win!';
        wins++;
        winCount.textContent = wins;
    } else if(userChoice === 'rock' && cpuChoice === 'paper') {
        message.textContent = 'you lose!';
        losses++;
        lossCount.textContent = losses;
    } else if(userChoice === 'paper' && cpuChoice === 'rock') {
        message.textContent = 'you win!';
        wins++;
        winCount.textContent = wins;
    } else if(userChoice === 'paper' && cpuChoice === 'scissors'){
        message.textContent = 'you lose...';
        losses++;
        lossCount.textContent = losses;
    } else if(userChoice === 'scissors' && cpuChoice === 'paper') {
        message.textContent = 'you win!';
        wins++;
        winCount.textContent = wins;
    } else if(userChoice === 'scissors' && cpuChoice === 'rock'){
        message.textContent = 'you lose...';
        losses++;
        lossCount.textContent = losses;
    }
});
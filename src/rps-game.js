import getThrow from './get-throw.js';


const throwButton = document.getElementById('throw');
const winImage = document.getElementById('winning-image');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
const userBetCount = document.getElementById('user-bet');
const cpuBetCount = document.getElementById('cpu-bet');

let wins = 0;
let losses = 0;
let draws = 0;
let userBetAmount = 100;
let cpuBetAmount = 100;

let userMsg = userBetAmount;
let cpuMsg = cpuBetAmount;

userBetCount.textContent = userMsg;
cpuBetCount.textCOntent = cpuMsg;

throwButton.addEventListener('click', () => {
    const cpuChoice = getThrow();
   
    winImage.classList.remove('invisible');
    const src = 'assets/weapons/' + cpuChoice + '.jpg';
    winImage.src = src;
    
    const weaponButton = document.querySelector('input:checked');
    const userChoice = weaponButton.value;
    
    let loseResponse = 'Game Over...';
    let winResponse = 'You won the Millenium Falcon';

    gamePlay(userChoice, cpuChoice, weaponButton);
    userBet(loseResponse, winResponse);
    cpuBet(loseResponse, winResponse);
});

function userBet(loseResponse, winResponse) {
    if(userBetAmount === 0) {
        userBetCount.textContent = loseResponse;
    }
    else if(userBetAmount === 200) {
        userBetCount.textContent = winResponse;
        throwButton.disabled = true;
    }
}

function cpuBet(loseResponse, winResponse) {
    if(cpuBetAmount === 0) {
        cpuBetCount.textContent = loseResponse;
    }
    else if(cpuBetAmount === 200) {
        cpuBetCount.textContent = winResponse;
        throwButton.disabled = true;
    }
}

function gamePlay(userChoice, cpuChoice, weaponButton) {
    if(userChoice === cpuChoice) {
        message.textContent = 'draw';
        draws++;
        drawCount.textContent = draws;
        userBetAmount += 0;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += 0;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(weaponButton.value === 'rock' && cpuChoice === 'scissors') {
        message.textContent = 'YOU Win!';
        wins++;
        winCount.textContent = wins;
        userBetAmount += 10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += -10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(userChoice === 'rock' && cpuChoice === 'paper') {
        message.textContent = 'CPU Wins!';
        losses++;
        lossCount.textContent = losses;
        userBetAmount += -10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += 10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(userChoice === 'paper' && cpuChoice === 'rock') {
        message.textContent = 'YOU Win!';
        wins++;
        winCount.textContent = wins;
        userBetAmount += 10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += -10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(userChoice === 'paper' && cpuChoice === 'scissors') {
        message.textContent = 'CPU Wins!';
        losses++;
        lossCount.textContent = losses;
        userBetAmount += -10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += 10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(userChoice === 'scissors' && cpuChoice === 'paper') {
        message.textContent = 'YOU Win!';
        wins++;
        winCount.textContent = wins;
        userBetAmount += 10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += -10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
    else if(userChoice === 'scissors' && cpuChoice === 'rock') {
        message.textContent = 'CPU Wins!';
        losses++;
        lossCount.textContent = losses;
        userBetAmount += -10;
        userBetCount.textContent = userBetAmount + ' Credits';
        cpuBetAmount += 10;
        cpuBetCount.textContent = cpuBetAmount + ' Credits';
    }
}

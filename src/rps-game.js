import getThrow from './get-throw.js';


const throwButton = document.getElementById('throw');
const winImage = document.getElementById('winnning-image');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

throwButton.addEventListener('click', () => {
    const weapon = getThrow();
   
    winImage.classList.remove('invisible');
    //const src = 'assets/weapons/' + weapon + '.jpg';
    //winImage.src = src;

    const weaponButton = document.querySelector('input:checked');

    const won = weaponButton.value === weapon;

    if(won){
        message.textContent = 'You win the throw!';
        wins++;
        winCount.textContent = wins;
    } else {
        message.textContent = 'You loss the throw...';
        losses++;
        lossCount.textContent = losses;
    }

});

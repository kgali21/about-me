import compareNumbers from './number-guess.js'

const generate = document.getElementById('generate');
const rightAnswer = document.getElementById('right-answer')

const correctNumber = 4;

generate.addEventListener('click', () =>{



    if(correctNumber === 4){

        rightAnswer.classList.remove('hidden');

        generate.disable = true;

    } 

});
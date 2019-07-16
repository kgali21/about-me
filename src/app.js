import isYes from './isYes.js'

const runQuiz = document.getElementById('run-quiz');
const result = document.getElementById('quiz-result');

runQuiz.onclick = function(){
    alert('hello from Kam');


    const confirmed = confirm('Are you sure you want to start?');
    if(confirmed === false){
    return;
}
    let name = '';

    const firstName = prompt('What\'s your first name?');
    name = name + firstName;
   

    const lastName = prompt('What\'s your last name?');
    name = name + '  ' + lastName;

    let correctAnswers = 0;

    const whereIWorked = prompt('Did Kam work at McMenamins? True or false?');
    const correctWhereIWorked = true;
    if(isYes(whereIWorked) === correctWhereIWorked){
        correctAnswers += 1;
    }

    const whatWatch = prompt('Does Kam want to buy a Rolex?');
    const correctWhatWatch = true;
    if(isYes(whatWatch) === correctWhatWatch){
        correctAnswers += 1;
    }
    
    const vacayMexico = prompt('Does Kam want to vacation to Mexico?');
    const correctVacayMexico = true;
    if(isYes(vacayMexico) === correctVacayMexico){
        correctAnswers += 1;
    }

    let response = 'Hey there ' + name;

    if(correctAnswers === 1){
    response += ' You got a score of 33%, needs work!';
    }

    else if(correctAnswers === 2){
        response += ' You got a score of 66%, keep trying!'
    }

    else if(correctAnswers === 3){
        response += ' You got a score of 100%, you really know your stuff!'
    }
  
    else{
    response += ' You got a score of 0%, looks like you need to read the page...'
}

alert('Check your quiz results below!');

    result.textContent = response;
};
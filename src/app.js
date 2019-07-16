import isYes from './isYes.js'

const runQuiz = document.getElementById('run-quiz');
const result = document.getElementById('qui-result');

runQuiz.onclick = function(){
    alert('hello from Kam');


    const confirmed = confirm('Are you sure you want to start?');
    if(confirmed === false){
    return;
}

    const firstName = prompt('What\'s your first name?');
    name = name + firstName;

    const lastName = prompt('What\'s your last name?');
    name = ' ' + lastName;

    let correctaAnswers = 0;

    const whereIWorked = prompt('Did Kam work at McMenamins? True or false?');
    const correctWhereIWorked = true;
    if(isYes(whereIWorked)===correctWhereIWorked){
        correctAnswers += 1;
    }

    let response = 'Your name is ' + name;

    if(correctAnswers >= 1){
    response += 'Thats one more point!';
}
    else{
    response += 'Try again!'
}

    result.textContent = resonse;
};
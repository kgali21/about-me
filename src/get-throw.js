

function throw() {

        const randomWeapon = Math.floor(Math.random() * 3);

        const weapon = getThrowFromNumber(randomWeapon);

        return weapon;
}

function getThrowFromNumber(randomWeapon){
    if(randomWeapon === 0){
        return 'rock';
    }
    else if(randomWeapon === 1){
        return 'paper';
    }
    else if(randomWeapon === 2){
        return 'scissors';
    }
    
}
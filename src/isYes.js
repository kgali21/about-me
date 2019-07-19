function isYes(text){
    text = text.toLowerCase();
    if(text === 'yes'){
        return true;
    }
    else if(text === 'yep'){
        return true;
    }
    else if(text === 'true'){
        return true;
    }
    else if(text === 'yea'){
        return true;
    }
    else if(text === 'yeah'){
        return true;
    }
    else {
        return false;
    }
}

export default isYes;
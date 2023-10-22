
function getColor(phrase){
    const strPhrase =phrase.toString().toLowerCase();
    if(strPhrase === 'stop'){
        console.log('red');
    } else if (strPhrase === 'slow') {
        console.log('yellow');
    } else if (strPhrase === 'go'){
        console.log('green');
    } else {
        console.log('purple');
    }
}

getColor('go');


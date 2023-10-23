const startBtn = document.getElementById('btn');

startBtn.addEventListener('click', ()=>{
    let maxNum = parseInt(prompt('Enter the maximum number!'));


while (!maxNum)
{ 
    maxNum = parseInt(prompt('Enter the valid number!'));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = prompt('Enter your first guess!(Quit:"q")');
let ateempts = 1;


while(guessNum !== targetNum){
    if(guessNum === 'q') 
        break;

    guessNum = parseInt(guessNum);

    if(guessNum > targetNum){
        guessNum = parseInt(prompt('Too high! Enter your new guess!:(Quit:"q") '));
        ateempts++;
    } else if (guessNum < targetNum){
        guessNum = parseInt(prompt('Too low! Enter your new guess!:(Quit:"q")'));
        ateempts++;
    } else{
        guessNum = prompt('Invalid quess. Please enter a number or "q" to quit');
    }
}

if(guessNum ==='q'){
    console.log('QUIT!');
} else {
    console.log(`you got it! It took you ${ateempts} guesses`);
}
});

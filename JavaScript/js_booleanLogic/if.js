const randomNum = Math.floor(Math.random() * 100)+1;
//짝수이면 "even", 홀수이면 작업 X
function isEven(num){
   if(num % 2 === 0)
   {
    console.log('even');
   }
}

isEven(randomNum);
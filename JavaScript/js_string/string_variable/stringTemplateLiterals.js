const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `${die1} 과 ${die2}가 나왔습니다. 합계는 ${die1+die2} 입니다.`;

console.log(roll);
const str = 'Da ba dee da ba daa';

const strSplit = str.split(' ');


for (i=0; i < strSplit.length; i++) {
    console.log(strSplit[i]);
}


let count = 30;

for (let i = 0; i < 6; i++) {
    count-=5;
    console.log(count);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element.toUpperCase());
    
}

const numbers = [1,2,3,4,5,6,7,8,9];

for (const number of numbers) {
    console.log(number**2);
}
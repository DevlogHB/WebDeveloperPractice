const square = function (num) {
    console.log(Math.pow(num,2));
}

square(4);
square(3);


const squareObj = {
    area(num) {
    console.log(Math.pow(num,2));

    },
    perimeter(num) {
        console.log(num * 4);
    }
}

squareObj.area(10);
squareObj.perimeter(10);

const henObj = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg (){
        this.eggCount += 1;
        console.log('EGG');
    }
}

console.log(henObj.name);
console.log(henObj.eggCount); 
henObj.layAnEgg(); 
henObj.layAnEgg(); 
console.log(henObj.eggCount);
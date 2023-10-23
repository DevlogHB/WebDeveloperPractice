function printHeart() {
    console.log('<3');
}

printHeart();

function rant(message){
    const upStrMessage = message.toString().toUpperCase();
    console.log(upStrMessage);
    console.log(upStrMessage);
    console.log(upStrMessage);
}

rant('I hate beets');

function isSnakeEyes(num1, num2){
    if (num1 === 1 && num2 ===1)
    {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
}
isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);

function multiply(num1, num2){
    // return num1 * num2;
    console.log(num1 * num2);
}

multiply(2,3);
multiply(9,9);
multiply(5,4);

function isShortsWeather(temperature){
    if(temperature >= 75)
    {
        // return true;
    console.log(true);

    } else {
    console.log(false);
    // return false;
    }
}

isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);


function lastElement(arr){
    if(arr.length === 0)
    {
        console.log(null);
        return;
    }
    console.log(arr[arr.length - 1]);
}
lastElement([3,5,7]);
lastElement([1]);
lastElement([]);

// const a = 'aa';
// a.substring
function capitalize(str){
    const strUp = str.slice(0,1).toUpperCase();

    str = strUp + str.substring(1, str.length);
    console.log(str);
    return str;
}

capitalize('eggplant');
capitalize('pamplemousse') 
capitalize('squid')

function sumArray(arrs){
    let sumNum = 0;
    for (const arr of arrs) {
        sumNum += arr;
    }

    console.log(sumNum);
    return sumNum;
}
sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);

function returnDay(dayNum) {
    if(dayNum <= 0 || dayNum >7)
    {
        return null;
    }
    const days ={1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday', 7:'Sunday'}

    console.log(days[dayNum]);
    return days[dayNum];

}

returnDay(1);
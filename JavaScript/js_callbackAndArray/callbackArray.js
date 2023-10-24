const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


const firstNames = fullNames.map(function(last){
    return last.first;
});

console.log(firstNames);

const greet = (str)=>{
    console.log(`Hey ${str}!`);
}

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"


function validUserNames(usernames) {
    // your code here
    return usernames.filter(m => m.length <10)
  };

 console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));


function allEvens(arr){
    console.log(arr.every(e=>e % 2===0));
}

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false
const lottoNumbers = [1,11,21,31,41,7];

console.log(lottoNumbers);

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];

leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco'

console.log(leaderboard);

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift('The Moon');
planets.push('Saturn');
planets.unshift('Mercury');
console.log(planets);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);




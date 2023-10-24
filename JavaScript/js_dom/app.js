const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');

const doneTodos = document.querySelectorAll('li.done');
const checkbox = document.querySelector('input[type="checkbox"]');

const span = document.querySelector('span');
span.innerText = "Disgusting";

const imgAttribute = document.querySelector('.imgEgg');
imgAttribute.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');

const container = document.getElementById('container');
container.style.textAlign = 'center';

const containerImg = document.getElementById('container__img');
containerImg.style.width = '150px';
containerImg.style.borderRadius = '50%';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const spanColor = document.querySelectorAll('span.rainbow');


for (let i = 0; i < spanColor.length; i++) {
    spanColor[i].style.color = colors[i];
}

const liHighlight = document.querySelectorAll('#liLight')

for (let i = 0; i < liHighlight.length; i++) {
  
    if(liHighlight[i].classList.toString() === 'highlight')
    {
        liHighlight[i].classList.remove('highlight');
        console.log(liHighlight[i].classList.toString());
    } else {
        liHighlight[i].classList.add('highlight');
        console.log(liHighlight[i].classList.toString());
    }
}


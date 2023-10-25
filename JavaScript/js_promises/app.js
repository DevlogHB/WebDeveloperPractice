const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if (rand < 0.7){
                resolve('YOUR FAKE DATA HERE');
            } 
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('./dogs/1')
    .then((data) =>{
        console.log('DONE WITH ERQUEST!');
        console.log('data is: ', data);
    })
    .catch((err)=>{
        console.log('OH NO!', err);
    });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delatdeColorChange('red',1000);
    await delatdeColorChange('orange',1000);
    await delatdeColorChange('yellow',1000);
    await delatdeColorChange('green',1000);
    await delatdeColorChange('blue',1000);
    await delatdeColorChange('indigo',1000);
}
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const serarchTerm = form.elements.query.value;
    const config = {params : {q:serarchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data)
})

const makeImages = (shows) =>{
    for(let result of shows) {
        if(result.show.image)
        {
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.append(img);
        }
    }
}
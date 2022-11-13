const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


// https://api.themoviedb.org/3/movie/6643/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US

const container = document.querySelector('.body')
const body = document.querySelector('body')
function addJS() {
    const js = document.createElement('script')
    js.innerHTML = ` 
        const items = document.querySelectorAll('.item')
        items.forEach(e => {
        e.addEventListener('click', () => {
        console.log(' ahsjfahgsjfghaj')

            localStorage.setItem('idFim', e.getAttribute('value'));
            })
        }) 
    `
    body.appendChild(js)
}

function render(data) {
    data.forEach(e => {
        const item = document.createElement("div");
        item.className = 'col-sm-4 col-md-3'
        item.innerHTML = `
                <a href="./detail.html">
                    <div class="item" value="${e.id}">
                        <div class="img img_150">
                            <img src="${IMG_PATH + e.poster_path}" alt="">
                        </div>
                        <div class="content">
                            <div class="title">${e.title}</div>
                            <div class="rate"><span>${e.vote_average}</span></div>
                        </div>
                        <div class="text">
                            <h3>Overview</h3>
                            <p>${e.overview}
                            </p>
                        </div>
                    </div>
                </a>
    `
        container.appendChild(item)
    });

}
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        // dataFim = data
        console.log(data)
        render(data.results)
    })
    .then(data => {
        addJS()
    });

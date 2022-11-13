let id = localStorage.getItem('idFim')
// console.log(id)
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`

const API_reviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`


const container = document.querySelector('.fimlDetail')
function render(data) {
    let gener = data.genres.map(e => e.name)
    const item = document.createElement("div");
    item.className = 'film-wrap'
    item.style =`background-image: url(${IMG_PATH+data.backdrop_path});`
    item.innerHTML = `
        <div class="col-sm-3  col-xs-12">
            <div class="img img_150">
                <img src="${IMG_PATH + data.poster_path}" alt="">
            </div>
        </div>
        <div class="col-sm-9 col-xs-12">
            <div class="content">
                <h3 class="title">
                ${data.title}
                </h3>
                <p>
                   ${gener.join(', ')}
                </p>
                <div class="rate centerbox"><span>7.8</span></div>
                <div class="text">
                    <h3>Overview</h3>
                    <p>${data.overview}
                    </p>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    `
    container.appendChild(item)
}

fetch(API_DETAIL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        render(data)
    }
    )
fetch(API_reviews)
    .then(res => res.json())
    .then(data => console.log(data))
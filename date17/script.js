var movies = document.querySelectorAll('.movie');
var showmovies = document.querySelector('.show-movie');
var btnclose = document.querySelector('.btnclose');
console.log(movies);

var currentIndex = 0;
movies.forEach((item, index) =>{
    item.addEventListener('click', function(){
        currentIndex = index;
        showmovies.classList.add('active');
    });
})

btnclose.addEventListener('click', function(){
    showmovies.classList.remove('active');
})


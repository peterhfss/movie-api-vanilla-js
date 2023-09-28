import { apiKey } from "../env/key.js"

const moviesContainer = document.querySelector('.movies');
const inputSearch  = document.querySelector('.inputSearch');
const searchIcon = document.querySelector('.searchIcon');


inputSearch.addEventListener('keyup' , function(event){
    if(event.keyCode == 13){
     searchMovie()
     return
    }
 })

searchIcon.addEventListener('click', searchMovie)

async function getPopularMovies(){
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
    const response = await fetch(url)
    const { results} = await response.json()
    return results
}

async function searchMovieByTitle(title){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=pt-BR&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
}

async function searchMovie(){
    const nameMovie = inputSearch.value;
    if(nameMovie != ''){
        resetSearchMovies();
        const movies = await searchMovieByTitle(nameMovie);
        movies.forEach((movie) => renderMovie(movie))
    }
}

function resetSearchMovies(){
    moviesContainer.innerHTML = '';
}

window.onload = async function(){
    const movies = await getPopularMovies()
    console.log(movies)
   movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie){

    const {title, release_date , poster_path , vote_average , overview} = movie;
    const isFavorite = false

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`
    const year = new Date(release_date).getFullYear()

    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')
    moviesContainer.appendChild(movieElement)

    const movieDetails = document.createElement('div')
    movieDetails.classList.add('movie-details')

    const movieImageContainer = document.createElement('div')
    movieImageContainer.classList.add('movie-image')
    const movieImage = document.createElement('img')
    movieImage.src = image;
    movieImage.alt = `${title} Banner`
    movieImageContainer.appendChild(movieImage)
    movieDetails.appendChild(movieImageContainer)

    const movieTextContainer = document.createElement('div')
    movieTextContainer.classList.add('movie-text')
    const movieTitle = document.createElement('h4')
    movieTitle.textContent = `${title}`
    const movieYear = document.createElement('h5')
    movieYear.textContent = `${year}`
    movieTextContainer.appendChild(movieTitle)
    movieTextContainer.appendChild(movieYear)
    movieDetails.appendChild(movieTextContainer)

    const movieInformations = document.createElement('div')
    movieInformations.classList.add('rating-favorites')
    movieTextContainer.appendChild(movieInformations)

    const ratingContainer = document.createElement('div')
    ratingContainer.classList.add('rating')
    const startImage = document.createElement('img')
    startImage.src = './assets/Star.svg'
    startImage.alt = 'Start'
    const movieRate = document.createElement('span')
    movieRate.textContent = vote_average
    ratingContainer.appendChild(startImage)
    ratingContainer.appendChild(movieRate)
    movieInformations.appendChild(ratingContainer)

    const favoriteContainer = document.createElement('div')
    favoriteContainer.classList.add('favorites')
    const heartImage = document.createElement('img')
    heartImage.src = isFavorite ? './assets/Vector.svg': './assets/Heart.svg'
    heartImage.alt = 'Heart'
    const movieFavorites = document.createElement('span')
    movieFavorites.textContent = 'Favorite'
    favoriteContainer.appendChild(heartImage)
    favoriteContainer.appendChild(movieFavorites)
    movieInformations.appendChild(favoriteContainer)

    const movieDescriptionContainer = document.createElement('div')
    movieDescriptionContainer.classList.add('movie-description')
    const movieDescription = document.createElement('span')
    movieDescription.textContent = overview
    movieDescriptionContainer.appendChild(movieDescription)

    movieElement.appendChild(movieDetails)
    movieElement.appendChild(movieDescriptionContainer)
}
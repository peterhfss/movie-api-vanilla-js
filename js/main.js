import { apiKey } from "../env/key.js"

async function getPopularMovies(){
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const { results} = await response.json()

    return results
}

const moviesContainer = document.querySelector('.movies');

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
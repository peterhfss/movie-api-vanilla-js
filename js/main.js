const moviesContainer = document.querySelector('.movies');

const movies  = [
    {
        title: 'Avengers Endgame',
        year: 2019,
        rating: "8.4/10",
        isFavorite: true,
        description: "Following the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of their remaining allies, the Avengers must assemble once again to undo Thanos' actions and undo the chaos in the universe, no matter what consequences may lie in store, and no matter who they face.",
        image: './assets/Avengers_Endgame.jpeg'
    },
    {
        title: 'Avengers Endgame',
        year: 2019,
        rating: "8.4/10",
        isFavorite: true,
        description: "Following the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of their remaining allies, the Avengers must assemble once again to undo Thanos' actions and undo the chaos in the universe, no matter what consequences may lie in store, and no matter who they face.",
        image: './assets/Avengers_Endgame.jpeg'
    },
    {
        title: 'Avengers Endgame',
        year: 2019,
        rating: "8.4/10",
        isFavorite: true,
        description: "Following the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of their remaining allies, the Avengers must assemble once again to undo Thanos' actions and undo the chaos in the universe, no matter what consequences may lie in store, and no matter who they face.",
        image: './assets/Avengers_Endgame.jpeg'
    },

]

window.onload = function(){
    movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie){

    const {title, year, rating, isFavorite, image, description } = movie;

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
    movieRate.textContent = rating
    ratingContainer.appendChild(startImage)
    ratingContainer.appendChild(movieRate)
    movieInformations.appendChild(ratingContainer)

    const favoriteContainer = document.createElement('div')
    favoriteContainer.classList.add('favorites')
    const heartImage = document.createElement('img')
    heartImage.src = isFavorite ? './assets/Heart.svg': './assets/Vector.svg'
    heartImage.alt = 'Heart'
    const movieFavorites = document.createElement('span')
    movieFavorites.textContent = 'Favorite'
    favoriteContainer.appendChild(heartImage)
    favoriteContainer.appendChild(movieFavorites)
    movieInformations.appendChild(favoriteContainer)

    const movieDescriptionContainer = document.createElement('div')
    movieDescriptionContainer.classList.add('movie-description')
    const movieDescription = document.createElement('span')
    movieDescription.textContent = description
    movieDescriptionContainer.appendChild(movieDescription)

    movieElement.appendChild(movieDetails)
    movieElement.appendChild(movieDescriptionContainer)
}
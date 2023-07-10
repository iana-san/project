const numberOfFilms = +prompt("How many movies have u watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("One of the latest movies watched?", ""),
      rateMovie = prompt("How would you rate it?", ""),
      lastSecMovie = prompt("One of the latest movies watched?", ""),
      rateSecMovie = prompt("How would you rate it?", "");

personalMovieDB.movies[lastMovie] = rateMovie;
personalMovieDB.movies[lastSecMovie] = rateSecMovie;

console.log(personalMovieDB);
import fetchMovies from "./fetchMovie";
import displayMovie from "./displayMovie";
import { filterMovieListByYear, filterMovieListByTitle } from "./filterMovieList";

const result = fetchMovies();

result.then(data => {
  const movies = data.results;
  movies.forEach(movie => {
    displayMovie(movie);
  });
});

const filterTitle = document.getElementById("filter-movie-title");
filterTitle.addEventListener("input", filterMovieListByTitle);

const filterSelect = document.getElementById("filter-movie-year");
filterSelect.addEventListener("input", filterMovieListByYear);

const movieLibraryButton = document.getElementById("movie-library");
movieLibraryButton.addEventListener("click", test);

const addMovieButton = document.getElementById("add-movie");
addMovieButton.addEventListener("click", test);

function test() {
  console.log("test");
}

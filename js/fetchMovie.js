const apiKey = "cef46c4d0e8988adbf87fece3021af51";
const url = "https://api.themoviedb.org/3/discover/movie?api_key=";

// returns promise
function fetchMovies() {
  return fetch(url + apiKey)
    .then(data => data.json())
    .then(result => result);
}

export default fetchMovies;

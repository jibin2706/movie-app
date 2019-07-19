import { extractYear } from "./utils";
const imageURL = "https://image.tmdb.org/t/p/w500/";

function displayMovie(movie) {
  const app = document.getElementById("app");

  const { title, release_date, poster_path } = movie;

  // creating components
  const movieCard = document.createElement("div");
  const movieImage = document.createElement("img");
  const movieInfo = document.createElement("div");
  const movieTitle = document.createElement("span");
  const movieYear = document.createElement("span");

  // setting attributes
  movieCard.setAttribute("class", "card");
  movieImage.setAttribute("class", "card__image");
  movieInfo.setAttribute("class", "card__info");
  movieTitle.setAttribute("class", "card__title");
  movieYear.setAttribute("class", "card__year");

  movieTitle.innerText = title;
  movieYear.innerText = extractYear(release_date);
  movieImage.src = imageURL + poster_path;

  // appending to html
  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieYear);
  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieInfo);

  app.appendChild(movieCard);
}

export default displayMovie;

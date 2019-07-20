import { extractYear } from "./utils";

const imageURL = "https://image.tmdb.org/t/p/w500/";

function displayMovie(movie) {
  const app = document.getElementById("app");

  // extracting required items from the object
  const { title, release_date, poster_path } = movie;

  // creating components
  const movieCard = document.createElement("div");
  movieCard.setAttribute("class", "card");

  movieCard.innerHTML = `
    <div class="card__image__container">
      <img class="card__image" src=${imageURL + poster_path} />
      <div class="card__image__overlay">
        <button class="btn btn--primary">Add</button>
      </div>
    </div>
    <div class="card__info">
      <span class="card__title">${title}</span>
      <span class="card__year">${extractYear(release_date)}</span>
    </div>
  `;

  // appending card to html
  app.appendChild(movieCard);
}

export default displayMovie;

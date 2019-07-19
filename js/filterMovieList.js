function filterMovieListByTitle(e) {
  const card = document.querySelectorAll(".card__title");
  const keyword = e.target.value.toLowerCase();

  card.forEach(movie => {
    if (!movie.innerText.toLowerCase().includes(keyword)) {
      movie.parentNode.parentNode.style.display = "none";
    } else {
      movie.parentNode.parentNode.style.display = "block";
    }
  });
}

function filterMovieListByYear(e) {
  const card = document.querySelectorAll(".card__year");
  const keyword = e.target.value;

  card.forEach(movie => {
    const movieCard = movie.parentNode.parentNode;

    if (!movie.innerText.toLowerCase().includes(keyword)) {
      movieCard.style.display = "none";
    } else {
      movieCard.style.display = "block";
    }
  });
}

export { filterMovieListByTitle, filterMovieListByYear };

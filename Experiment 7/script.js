const movies = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Avengers: Endgame",
  "The Matrix",
  "Titanic",
  "Joker",
  "Avatar",
  "Shutter Island",
  "The Lion King"
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");

function displayMovies(list) {
  movieList.innerHTML = "";
  list.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

displayMovies(movies);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.toLowerCase().includes(query)
  );
  displayMovies(filteredMovies);
});

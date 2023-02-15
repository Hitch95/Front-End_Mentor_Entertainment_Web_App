//const yearOfParution = document.getElementById('year-parution');

fetch(genre_list_http + new URLSearchParams({
      api_key: api_key
}))

.then(res => res.json())
.then(data => console.log(data))/*
.then(data => {
  data.genres.forEach(item => {
    fetchMoviesListByGenres(item.id, item.name)
  });
});

const fetchMoviesListByGenres = (id, genres) => {
  fetch(movie_genres_http + new URLSearchParams({
    api_key: api_key,
    with_genres: id,
    page:Math.floor(Math.random() * 3) + 1
  }))
  .then (res => res.json())
  .then(data => {
    makeCategoryElement(`${genres}_movies`, data.results)
  })
  .catch(err => console.log(err));
}

const makeCategoryElement = (category, data) => {

}
*/
// mutant: `Math.ceil` became `Math.floor`
const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1981, minutes: 112, rating: 5.4, genre: "comedy"},
  {id: 2, title: "Silver Fox", year: 2017, minutes: 148, rating: 4.1, genre: "sci-fi"},
  {id: 3, title: "Night Train", year: 1985, minutes: 134, rating: 5.6, genre: "thriller"},
  {id: 4, title: "Glass City", year: 2017, minutes: 117, rating: 4.9, genre: "thriller"},
  {id: 5, title: "Blue River", year: 1983, minutes: 162, rating: 4.9, genre: "thriller"},
  {id: 6, title: "Red Harbor", year: 2024, minutes: 150, rating: 7.7, genre: "comedy"},
  {id: 7, title: "Open Road", year: 1991, minutes: 154, rating: 9.3, genre: "comedy"},
  {id: 8, title: "Iron Garden", year: 2021, minutes: 116, rating: 6, genre: "comedy"}
];

function pageOfMovies(movies, page, size) {
  const totalPages = Math.floor(movies.length / size);
  const items = movies.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}

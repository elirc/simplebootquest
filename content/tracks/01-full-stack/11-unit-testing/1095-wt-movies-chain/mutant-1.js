// mutant: condition negated: `===` became `!==`
const MOVIES = [
  {id: 1, title: "Iron Garden", year: 2002, minutes: 106, rating: 7.2, genre: "thriller"},
  {id: 2, title: "Winter Kings", year: 2002, minutes: 116, rating: 6.2, genre: "thriller"},
  {id: 3, title: "Glass City", year: 2019, minutes: 144, rating: 7.6, genre: "drama"},
  {id: 4, title: "Silver Fox", year: 2017, minutes: 109, rating: 4.4, genre: "comedy"},
  {id: 5, title: "Red Harbor", year: 1989, minutes: 136, rating: 9, genre: "drama"},
  {id: 6, title: "Night Train", year: 2002, minutes: 106, rating: 8.6, genre: "drama"},
  {id: 7, title: "Open Road", year: 2023, minutes: 139, rating: 8.4, genre: "thriller"},
  {id: 8, title: "Blue River", year: 2017, minutes: 135, rating: 4.9, genre: "sci-fi"}
];

function moviesInGenreRanked(movies, value) {
  return movies
    .filter((x) => x.genre !== value)
    .sort((a, b) => b.rating - a.rating)
    .map((x) => x.title);
}

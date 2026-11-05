// mutant: sorts (mutates) the input array in place
const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2005, minutes: 91, rating: 6.1, genre: "sci-fi"},
  {id: 2, title: "Glass City", year: 2000, minutes: 146, rating: 4.6, genre: "drama"},
  {id: 3, title: "Silver Fox", year: 1989, minutes: 110, rating: 4.6, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1999, minutes: 90, rating: 6.5, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2018, minutes: 169, rating: 7.1, genre: "comedy"},
  {id: 6, title: "Quiet Storm", year: 2006, minutes: 131, rating: 6.3, genre: "sci-fi"},
  {id: 7, title: "Iron Garden", year: 2008, minutes: 106, rating: 6.4, genre: "drama"},
  {id: 8, title: "Red Harbor", year: 1983, minutes: 165, rating: 4.2, genre: "thriller"}
];

function topMoviesByYear(movies, n) {
  return movies.sort((a, b) => b.year - a.year).slice(0, n).map((x) => x.title);
}

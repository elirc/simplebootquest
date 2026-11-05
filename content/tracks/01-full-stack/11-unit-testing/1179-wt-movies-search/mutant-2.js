// mutant: input is no longer trimmed
const MOVIES = [
  {id: 1, title: "Glass City", year: 1994, minutes: 93, rating: 8.2, genre: "sci-fi"},
  {id: 2, title: "Paper Moon", year: 2005, minutes: 120, rating: 7.1, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2007, minutes: 129, rating: 7.3, genre: "comedy"},
  {id: 4, title: "Last Light", year: 2021, minutes: 153, rating: 7.7, genre: "drama"},
  {id: 5, title: "Blue River", year: 2008, minutes: 160, rating: 5.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2013, minutes: 122, rating: 4.4, genre: "thriller"},
  {id: 7, title: "Night Train", year: 1985, minutes: 159, rating: 9.4, genre: "thriller"},
  {id: 8, title: "Red Harbor", year: 2010, minutes: 83, rating: 4.8, genre: "drama"}
];

function searchMovies(movies, query) {
  const q = query.toLowerCase();
  return movies.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}

// mutant: mutates the original objects
const MOVIES = [
  {id: 1, title: "Last Light", year: 2003, minutes: 115, rating: 6.7, genre: "sci-fi"},
  {id: 2, title: "Glass City", year: 2005, minutes: 124, rating: 5.5, genre: "comedy"},
  {id: 3, title: "Blue River", year: 2014, minutes: 105, rating: 4.7, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 2008, minutes: 151, rating: 4.2, genre: "comedy"},
  {id: 5, title: "Paper Moon", year: 1990, minutes: 118, rating: 6, genre: "thriller"},
  {id: 6, title: "Silver Fox", year: 2008, minutes: 134, rating: 8.2, genre: "thriller"},
  {id: 7, title: "Iron Garden", year: 2002, minutes: 113, rating: 5.8, genre: "comedy"},
  {id: 8, title: "Red Harbor", year: 2013, minutes: 84, rating: 5.9, genre: "thriller"}
];

function bumpRating(movies, value, amount) {
  return movies.map((x) => (x.genre === value ? Object.assign(x, { rating: x.rating + amount } : x));
}

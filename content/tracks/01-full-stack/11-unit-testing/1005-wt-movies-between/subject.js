const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1992, minutes: 158, rating: 6.6, genre: "comedy"},
  {id: 2, title: "Last Light", year: 2013, minutes: 85, rating: 7.6, genre: "comedy"},
  {id: 3, title: "Iron Garden", year: 2010, minutes: 97, rating: 7.4, genre: "comedy"},
  {id: 4, title: "Paper Moon", year: 2000, minutes: 86, rating: 4.2, genre: "comedy"},
  {id: 5, title: "Glass City", year: 2007, minutes: 135, rating: 6.4, genre: "comedy"},
  {id: 6, title: "Open Road", year: 2006, minutes: 175, rating: 5, genre: "comedy"},
  {id: 7, title: "Silver Fox", year: 2022, minutes: 120, rating: 7.8, genre: "thriller"},
  {id: 8, title: "Quiet Storm", year: 1983, minutes: 137, rating: 8.5, genre: "thriller"}
];

function moviesInRange(movies, low, high) {
  return movies.filter((x) => x.year >= low && x.year <= high).map((x) => x.title);
}

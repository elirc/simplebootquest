// mutant: off-by-one in the index
const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1996, minutes: 105, rating: 5.8, genre: "sci-fi"},
  {id: 2, title: "Open Road", year: 2024, minutes: 145, rating: 6.5, genre: "comedy"},
  {id: 3, title: "Quiet Storm", year: 2011, minutes: 169, rating: 7.4, genre: "comedy"},
  {id: 4, title: "Night Train", year: 1992, minutes: 168, rating: 7, genre: "comedy"},
  {id: 5, title: "Silver Fox", year: 1988, minutes: 144, rating: 7.5, genre: "sci-fi"},
  {id: 6, title: "Last Light", year: 2003, minutes: 150, rating: 8.7, genre: "thriller"},
  {id: 7, title: "Paper Moon", year: 2005, minutes: 118, rating: 4.6, genre: "comedy"},
  {id: 8, title: "Glass City", year: 1982, minutes: 113, rating: 5.2, genre: "drama"}
];

function nthByRating(movies, n) {
  const sorted = [...movies].sort((a, b) => b.rating - a.rating);
  return n >= 1 && n <= sorted.length ? sorted[n].title : null;
}

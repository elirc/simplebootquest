// mutant: sort direction reversed
const MOVIES = [
  {id: 1, title: "Open Road", year: 2009, minutes: 147, rating: 6.3, genre: "sci-fi"},
  {id: 2, title: "Silver Fox", year: 2006, minutes: 127, rating: 6.6, genre: "comedy"},
  {id: 3, title: "Cloud Atlas", year: 2012, minutes: 165, rating: 6, genre: "drama"},
  {id: 4, title: "Paper Moon", year: 2004, minutes: 97, rating: 8.2, genre: "drama"},
  {id: 5, title: "Glass City", year: 2014, minutes: 121, rating: 7.7, genre: "sci-fi"},
  {id: 6, title: "Last Light", year: 2007, minutes: 120, rating: 7.6, genre: "comedy"},
  {id: 7, title: "Quiet Storm", year: 2018, minutes: 124, rating: 6, genre: "thriller"},
  {id: 8, title: "Winter Kings", year: 1999, minutes: 105, rating: 7.7, genre: "drama"}
];

function moviesByMinutes(movies) {
  return [...movies].sort((a, b) => b.minutes - a.minutes).map((x) => x.title);
}

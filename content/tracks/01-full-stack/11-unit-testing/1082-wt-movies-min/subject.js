const MOVIES = [
  {id: 1, title: "Night Train", year: 1982, minutes: 131, rating: 9.3, genre: "thriller"},
  {id: 2, title: "Iron Garden", year: 1982, minutes: 98, rating: 9, genre: "thriller"},
  {id: 3, title: "Glass City", year: 1985, minutes: 139, rating: 4.4, genre: "comedy"},
  {id: 4, title: "Winter Kings", year: 2008, minutes: 165, rating: 8, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2018, minutes: 160, rating: 6.8, genre: "drama"},
  {id: 6, title: "Cloud Atlas", year: 2014, minutes: 166, rating: 9, genre: "thriller"},
  {id: 7, title: "Last Light", year: 2010, minutes: 132, rating: 5.8, genre: "comedy"},
  {id: 8, title: "Paper Moon", year: 1996, minutes: 129, rating: 5.5, genre: "comedy"}
];

function lowestYear(movies) {
  let best = null;
  for (const x of movies) if (best === null || x.year < best.year) best = x;
  return best ? best.title : null;
}

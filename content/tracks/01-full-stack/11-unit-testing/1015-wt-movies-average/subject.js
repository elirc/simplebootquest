const MOVIES = [
  {id: 1, title: "Open Road", year: 2014, minutes: 154, rating: 5.2, genre: "thriller"},
  {id: 2, title: "Cloud Atlas", year: 2003, minutes: 163, rating: 7.1, genre: "sci-fi"},
  {id: 3, title: "Last Light", year: 2015, minutes: 166, rating: 7.7, genre: "comedy"},
  {id: 4, title: "Silver Fox", year: 2015, minutes: 120, rating: 5.9, genre: "comedy"},
  {id: 5, title: "Quiet Storm", year: 2023, minutes: 159, rating: 5.8, genre: "thriller"},
  {id: 6, title: "Blue River", year: 2020, minutes: 107, rating: 9.3, genre: "drama"},
  {id: 7, title: "Glass City", year: 2004, minutes: 98, rating: 6.2, genre: "drama"},
  {id: 8, title: "Iron Garden", year: 1984, minutes: 149, rating: 7, genre: "drama"}
];

function averageYear(movies) {
  if (movies.length === 0) return null;
  const total = movies.reduce((sum, x) => sum + x.year, 0);
  return Math.round((total / movies.length) * 10) / 10;
}

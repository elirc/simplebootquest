const MOVIES = [
  {id: 1, title: "Winter Kings", year: 1999, minutes: 165, rating: 4.9, genre: "thriller"},
  {id: 2, title: "Silver Fox", year: 1996, minutes: 109, rating: 6.3, genre: "sci-fi"},
  {id: 3, title: "Red Harbor", year: 1982, minutes: 100, rating: 5.8, genre: "sci-fi"},
  {id: 4, title: "Iron Garden", year: 2014, minutes: 91, rating: 5.9, genre: "sci-fi"},
  {id: 5, title: "Quiet Storm", year: 2007, minutes: 172, rating: 8.6, genre: "drama"},
  {id: 6, title: "Open Road", year: 1990, minutes: 150, rating: 9, genre: "thriller"},
  {id: 7, title: "Night Train", year: 2005, minutes: 171, rating: 9.3, genre: "comedy"},
  {id: 8, title: "Glass City", year: 1987, minutes: 166, rating: 7.4, genre: "comedy"}
];

test("with 1990", () => {
  expect(allMoviesUnder(MOVIES, 1990)).toEqual(false);
});

test("with 2015", () => {
  expect(allMoviesUnder(MOVIES, 2015)).toEqual(true);
});

test("with 2014", () => {
  expect(allMoviesUnder(MOVIES, 2014)).toEqual(false);
});

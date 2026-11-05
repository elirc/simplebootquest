const MOVIES = [
  {id: 1, title: "Night Train", year: 2020, minutes: 156, rating: 8.9, genre: "drama"},
  {id: 2, title: "Cloud Atlas", year: 2013, minutes: 149, rating: 9.3, genre: "sci-fi"},
  {id: 3, title: "Silver Fox", year: 2010, minutes: 98, rating: 7.3, genre: "comedy"},
  {id: 4, title: "Open Road", year: 2010, minutes: 163, rating: 7.1, genre: "drama"},
  {id: 5, title: "Quiet Storm", year: 1994, minutes: 141, rating: 6, genre: "thriller"},
  {id: 6, title: "Iron Garden", year: 2001, minutes: 89, rating: 5, genre: "sci-fi"},
  {id: 7, title: "Winter Kings", year: 2012, minutes: 115, rating: 7.5, genre: "thriller"},
  {id: 8, title: "Last Light", year: 1988, minutes: 160, rating: 7.4, genre: "drama"}
];

test("with 7.1", () => {
  expect(allMoviesUnder(MOVIES, 7.1)).toEqual(false);
});

test("with 10.3", () => {
  expect(allMoviesUnder(MOVIES, 10.3)).toEqual(true);
});

test("with 9.3", () => {
  expect(allMoviesUnder(MOVIES, 9.3)).toEqual(false);
});

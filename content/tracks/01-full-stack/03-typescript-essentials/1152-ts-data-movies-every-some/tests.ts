const MOVIES = [
  {id: 1, title: "Silver Fox", year: 2015, minutes: 111, rating: 7, genre: "drama"},
  {id: 2, title: "Blue River", year: 2014, minutes: 146, rating: 6.8, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2009, minutes: 173, rating: 7.2, genre: "thriller"},
  {id: 4, title: "Night Train", year: 2018, minutes: 164, rating: 4.4, genre: "comedy"},
  {id: 5, title: "Quiet Storm", year: 1985, minutes: 167, rating: 8.6, genre: "drama"},
  {id: 6, title: "Open Road", year: 2008, minutes: 149, rating: 7.3, genre: "sci-fi"},
  {id: 7, title: "Glass City", year: 1993, minutes: 99, rating: 4.4, genre: "drama"},
  {id: 8, title: "Cloud Atlas", year: 1984, minutes: 173, rating: 4.9, genre: "sci-fi"}
];

test("with 4.9", () => {
  expect(allMoviesUnder(MOVIES, 4.9)).toEqual(false);
});

test("with 9.6", () => {
  expect(allMoviesUnder(MOVIES, 9.6)).toEqual(true);
});

test("with 8.6", () => {
  expect(allMoviesUnder(MOVIES, 8.6)).toEqual(false);
});

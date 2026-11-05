const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1990, minutes: 91, rating: 4.6, genre: "comedy"},
  {id: 2, title: "Open Road", year: 2006, minutes: 101, rating: 6.7, genre: "comedy"},
  {id: 3, title: "Blue River", year: 1983, minutes: 123, rating: 8.7, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 1987, minutes: 119, rating: 5.9, genre: "drama"},
  {id: 5, title: "Glass City", year: 1990, minutes: 92, rating: 7.4, genre: "drama"},
  {id: 6, title: "Iron Garden", year: 1999, minutes: 144, rating: 4.1, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 1989, minutes: 118, rating: 5.4, genre: "drama"},
  {id: 8, title: "Night Train", year: 1992, minutes: 96, rating: 7.1, genre: "drama"}
];

test("with \"drama\"", () => {
  expect(countMoviesByGenre(MOVIES, "drama")).toEqual(4);
});

test("with \"comedy\"", () => {
  expect(countMoviesByGenre(MOVIES, "comedy")).toEqual(2);
});

test("with \"sci-fi\"", () => {
  expect(countMoviesByGenre(MOVIES, "sci-fi")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countMoviesByGenre(MOVIES, "nope")).toEqual(0);
});

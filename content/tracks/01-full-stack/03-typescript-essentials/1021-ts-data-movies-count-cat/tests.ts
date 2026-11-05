const MOVIES = [
  {id: 1, title: "Blue River", year: 2001, minutes: 167, rating: 4.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 106, rating: 9.2, genre: "comedy"},
  {id: 3, title: "Paper Moon", year: 2003, minutes: 91, rating: 7.5, genre: "comedy"},
  {id: 4, title: "Winter Kings", year: 1994, minutes: 142, rating: 4.7, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2019, minutes: 94, rating: 7.5, genre: "comedy"},
  {id: 6, title: "Red Harbor", year: 1987, minutes: 127, rating: 6.5, genre: "thriller"},
  {id: 7, title: "Cloud Atlas", year: 1992, minutes: 137, rating: 7.4, genre: "comedy"},
  {id: 8, title: "Silver Fox", year: 2018, minutes: 169, rating: 4.2, genre: "thriller"}
];

test("with \"drama\"", () => {
  expect(countMoviesByGenre(MOVIES, "drama")).toEqual(1);
});

test("with \"comedy\"", () => {
  expect(countMoviesByGenre(MOVIES, "comedy")).toEqual(4);
});

test("with \"sci-fi\"", () => {
  expect(countMoviesByGenre(MOVIES, "sci-fi")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countMoviesByGenre(MOVIES, "nope")).toEqual(0);
});

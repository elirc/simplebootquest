const MOVIES = [
  {id: 1, title: "Open Road", year: 1983, minutes: 162, rating: 6.2, genre: "thriller"},
  {id: 2, title: "Last Light", year: 1988, minutes: 148, rating: 6.9, genre: "comedy"},
  {id: 3, title: "Silver Fox", year: 1982, minutes: 107, rating: 8.2, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 1991, minutes: 140, rating: 8.3, genre: "comedy"},
  {id: 5, title: "Iron Garden", year: 2021, minutes: 133, rating: 7.4, genre: "sci-fi"},
  {id: 6, title: "Night Train", year: 1993, minutes: 107, rating: 5.3, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 1989, minutes: 83, rating: 9.2, genre: "thriller"},
  {id: 8, title: "Paper Moon", year: 1981, minutes: 129, rating: 5.2, genre: "drama"}
];

test("with 1, 3", () => {
  expect(pageOfMovies(MOVIES, 1, 3)).toEqual({"items":["Open Road","Last Light","Silver Fox"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfMovies(MOVIES, 2, 3)).toEqual({"items":["Winter Kings","Iron Garden","Night Train"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfMovies(MOVIES, 3, 3)).toEqual({"items":["Red Harbor","Paper Moon"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfMovies(MOVIES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});

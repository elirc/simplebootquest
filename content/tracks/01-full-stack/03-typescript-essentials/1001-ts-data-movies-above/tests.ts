const MOVIES = [
  {id: 1, title: "Night Train", year: 1990, minutes: 83, rating: 6, genre: "thriller"},
  {id: 2, title: "Iron Garden", year: 2014, minutes: 90, rating: 8.6, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2005, minutes: 149, rating: 5.5, genre: "sci-fi"},
  {id: 4, title: "Paper Moon", year: 2013, minutes: 120, rating: 6.3, genre: "comedy"},
  {id: 5, title: "Winter Kings", year: 2012, minutes: 108, rating: 6.2, genre: "drama"},
  {id: 6, title: "Quiet Storm", year: 1988, minutes: 143, rating: 4.1, genre: "sci-fi"},
  {id: 7, title: "Glass City", year: 2000, minutes: 138, rating: 5.3, genre: "sci-fi"},
  {id: 8, title: "Silver Fox", year: 1982, minutes: 89, rating: 7, genre: "sci-fi"}
];

test("with 5.5", () => {
  expect(moviesAbove(MOVIES, 5.5)).toEqual(["Night Train","Iron Garden","Paper Moon","Winter Kings","Silver Fox"]);
});

test("with 6.2", () => {
  expect(moviesAbove(MOVIES, 6.2)).toEqual(["Iron Garden","Paper Moon","Silver Fox"]);
});

test("with 999999", () => {
  expect(moviesAbove(MOVIES, 999999)).toEqual([]);
});

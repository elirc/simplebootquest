const MOVIES = [
  {id: 1, title: "Last Light", year: 2014, minutes: 105, rating: 4.8, genre: "comedy"},
  {id: 2, title: "Winter Kings", year: 2020, minutes: 146, rating: 4.4, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2006, minutes: 108, rating: 6, genre: "sci-fi"},
  {id: 4, title: "Paper Moon", year: 2007, minutes: 107, rating: 9.3, genre: "sci-fi"},
  {id: 5, title: "Night Train", year: 1998, minutes: 107, rating: 7.1, genre: "drama"},
  {id: 6, title: "Open Road", year: 1998, minutes: 165, rating: 4.2, genre: "thriller"},
  {id: 7, title: "Cloud Atlas", year: 2016, minutes: 151, rating: 4.8, genre: "comedy"},
  {id: 8, title: "Red Harbor", year: 1992, minutes: 144, rating: 7.9, genre: "sci-fi"}
];

test("with 107, 144", () => {
  expect(moviesInRange(MOVIES, 107, 144)).toEqual(["Iron Garden","Paper Moon","Night Train","Red Harbor"]);
});

test("with 144, 146", () => {
  expect(moviesInRange(MOVIES, 144, 146)).toEqual(["Winter Kings","Red Harbor"]);
});

test("with 107, 107", () => {
  expect(moviesInRange(MOVIES, 107, 107)).toEqual(["Paper Moon","Night Train"]);
});

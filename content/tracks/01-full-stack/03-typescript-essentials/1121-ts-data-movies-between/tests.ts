const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1987, minutes: 93, rating: 6.9, genre: "thriller"},
  {id: 2, title: "Glass City", year: 2010, minutes: 107, rating: 7.5, genre: "thriller"},
  {id: 3, title: "Quiet Storm", year: 1985, minutes: 131, rating: 8, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1989, minutes: 134, rating: 7.9, genre: "sci-fi"},
  {id: 5, title: "Night Train", year: 1982, minutes: 139, rating: 4.3, genre: "comedy"},
  {id: 6, title: "Open Road", year: 2020, minutes: 140, rating: 4.4, genre: "thriller"},
  {id: 7, title: "Red Harbor", year: 1998, minutes: 107, rating: 5.8, genre: "sci-fi"},
  {id: 8, title: "Iron Garden", year: 1996, minutes: 133, rating: 6.3, genre: "thriller"}
];

test("with 107, 133", () => {
  expect(moviesInRange(MOVIES, 107, 133)).toEqual(["Glass City","Quiet Storm","Red Harbor","Iron Garden"]);
});

test("with 133, 134", () => {
  expect(moviesInRange(MOVIES, 133, 134)).toEqual(["Winter Kings","Iron Garden"]);
});

test("with 107, 107", () => {
  expect(moviesInRange(MOVIES, 107, 107)).toEqual(["Glass City","Red Harbor"]);
});

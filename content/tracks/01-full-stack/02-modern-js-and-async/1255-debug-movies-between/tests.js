const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2001, minutes: 112, rating: 8.2, genre: "thriller"},
  {id: 2, title: "Glass City", year: 1983, minutes: 109, rating: 6.6, genre: "sci-fi"},
  {id: 3, title: "Blue River", year: 2000, minutes: 163, rating: 5.3, genre: "drama"},
  {id: 4, title: "Open Road", year: 1992, minutes: 103, rating: 5.1, genre: "sci-fi"},
  {id: 5, title: "Paper Moon", year: 2008, minutes: 139, rating: 6.5, genre: "sci-fi"},
  {id: 6, title: "Cloud Atlas", year: 2017, minutes: 146, rating: 6.2, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1992, minutes: 152, rating: 5.2, genre: "drama"},
  {id: 8, title: "Red Harbor", year: 2006, minutes: 168, rating: 5.7, genre: "drama"}
];

test("with 112, 146", () => {
  expect(moviesInRange(MOVIES, 112, 146)).toEqual(["Winter Kings","Paper Moon","Cloud Atlas"]);
});

test("with 146, 152", () => {
  expect(moviesInRange(MOVIES, 146, 152)).toEqual(["Cloud Atlas","Night Train"]);
});

test("with 112, 112", () => {
  expect(moviesInRange(MOVIES, 112, 112)).toEqual(["Winter Kings"]);
});

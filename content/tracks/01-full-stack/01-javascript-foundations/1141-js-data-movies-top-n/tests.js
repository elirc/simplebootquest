const MOVIES = [
  {id: 1, title: "Glass City", year: 1985, minutes: 86, rating: 7.1, genre: "sci-fi"},
  {id: 2, title: "Iron Garden", year: 2002, minutes: 142, rating: 7.5, genre: "drama"},
  {id: 3, title: "Blue River", year: 2003, minutes: 143, rating: 6.2, genre: "comedy"},
  {id: 4, title: "Winter Kings", year: 2008, minutes: 102, rating: 8.3, genre: "drama"},
  {id: 5, title: "Quiet Storm", year: 2010, minutes: 131, rating: 7.1, genre: "drama"},
  {id: 6, title: "Night Train", year: 1985, minutes: 171, rating: 8.3, genre: "drama"},
  {id: 7, title: "Cloud Atlas", year: 2002, minutes: 153, rating: 7.2, genre: "thriller"},
  {id: 8, title: "Open Road", year: 2012, minutes: 173, rating: 6.8, genre: "sci-fi"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(MOVIES);
  topMoviesByRating(MOVIES, 1);
  expect(JSON.stringify(MOVIES)).toBe(before);
});

test("with 1", () => {
  expect(topMoviesByRating(MOVIES, 1)).toEqual(["Winter Kings"]);
});

test("with 3", () => {
  expect(topMoviesByRating(MOVIES, 3)).toEqual(["Winter Kings","Night Train","Iron Garden"]);
});

test("with 0", () => {
  expect(topMoviesByRating(MOVIES, 0)).toEqual([]);
});

test('does not mutate the input', () => {
  const before = JSON.stringify(MOVIES);
  topMoviesByYear(MOVIES, 1);
  expect(JSON.stringify(MOVIES)).toBe(before);
});

test("with 1", () => {
  expect(topMoviesByYear(MOVIES, 1)).toEqual(["Open Road"]);
});

test("with 3", () => {
  expect(topMoviesByYear(MOVIES, 3)).toEqual(["Open Road","Iron Garden","Quiet Storm"]);
});

test("with 0", () => {
  expect(topMoviesByYear(MOVIES, 0)).toEqual([]);
});

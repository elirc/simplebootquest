test("with 2000, 2007", () => {
  expect(moviesInRange(MOVIES, 2000, 2007)).toEqual(["Paper Moon","Glass City","Open Road"]);
});

test("with 2007, 2010", () => {
  expect(moviesInRange(MOVIES, 2007, 2010)).toEqual(["Iron Garden","Glass City"]);
});

test("with 2000, 2000", () => {
  expect(moviesInRange(MOVIES, 2000, 2000)).toEqual(["Paper Moon"]);
});

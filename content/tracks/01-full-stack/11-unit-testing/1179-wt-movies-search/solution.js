test("with \"ro\"", () => {
  expect(searchMovies(MOVIES, "ro")).toEqual(["Iron Garden","Open Road"]);
});

test("with \"RO\"", () => {
  expect(searchMovies(MOVIES, "RO")).toEqual(["Iron Garden","Open Road"]);
});

test("with \"  \"", () => {
  expect(searchMovies(MOVIES, "  ")).toEqual(["Glass City","Paper Moon","Iron Garden","Last Light","Blue River","Open Road","Night Train","Red Harbor"]);
});

test("with \"zzz\"", () => {
  expect(searchMovies(MOVIES, "zzz")).toEqual([]);
});

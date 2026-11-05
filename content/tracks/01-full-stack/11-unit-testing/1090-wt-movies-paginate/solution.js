test("with 1, 3", () => {
  expect(pageOfMovies(MOVIES, 1, 3)).toEqual({"items":["Paper Moon","Silver Fox","Night Train"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfMovies(MOVIES, 2, 3)).toEqual({"items":["Glass City","Blue River","Red Harbor"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfMovies(MOVIES, 3, 3)).toEqual({"items":["Open Road","Iron Garden"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfMovies(MOVIES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});

test("with 1", () => {
  expect(nthByRating(MOVIES, 1)).toEqual("Last Light");
});

test("with 2", () => {
  expect(nthByRating(MOVIES, 2)).toEqual("Silver Fox");
});

test("with 5", () => {
  expect(nthByRating(MOVIES, 5)).toEqual("Open Road");
});

test("with 0", () => {
  expect(nthByRating(MOVIES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByRating(MOVIES, 99)).toEqual(null);
});

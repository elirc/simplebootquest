test("with 1", () => {
  expect(nthByStars(REPOS, 1)).toEqual("api-gateway");
});

test("with 2", () => {
  expect(nthByStars(REPOS, 2)).toEqual("docs");
});

test("with 5", () => {
  expect(nthByStars(REPOS, 5)).toEqual("analytics");
});

test("with 0", () => {
  expect(nthByStars(REPOS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByStars(REPOS, 99)).toEqual(null);
});

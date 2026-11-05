test("with 1520, 2099", () => {
  expect(reposInRange(REPOS, 1520, 2099)).toEqual(["analytics","api-gateway","cli"]);
});

test("with 2099, 2226", () => {
  expect(reposInRange(REPOS, 2099, 2226)).toEqual(["cli","design-system"]);
});

test("with 1520, 1520", () => {
  expect(reposInRange(REPOS, 1520, 1520)).toEqual(["api-gateway"]);
});

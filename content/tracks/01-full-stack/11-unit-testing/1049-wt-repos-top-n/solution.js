test('does not mutate the input', () => {
  const before = JSON.stringify(REPOS);
  topReposByStars(REPOS, 1);
  expect(JSON.stringify(REPOS)).toBe(before);
});

test("with 1", () => {
  expect(topReposByStars(REPOS, 1)).toEqual(["search"]);
});

test("with 3", () => {
  expect(topReposByStars(REPOS, 3)).toEqual(["search","auth-service","mobile"]);
});

test("with 0", () => {
  expect(topReposByStars(REPOS, 0)).toEqual([]);
});

test("an empty list", () => {
  expect(averageOpenIssues([])).toEqual(null);
});

test("all repos", () => {
  expect(averageOpenIssues(REPOS)).toEqual(78.6);
});

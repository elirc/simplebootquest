test("an empty list", () => {
  expect(percentArchived([])).toEqual(0);
});

test("all repos", () => {
  expect(percentArchived(REPOS)).toEqual(75);
});

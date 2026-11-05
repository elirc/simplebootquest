test("an empty list", () => {
  expect(lowestEstimate([])).toEqual(null);
});

test("all tasks", () => {
  expect(lowestEstimate(TASKS)).toEqual("Deploy API");
});

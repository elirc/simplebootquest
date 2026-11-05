test("an empty list", () => {
  expect(averageEstimate([])).toEqual(null);
});

test("all tasks", () => {
  expect(averageEstimate(TASKS)).toEqual(11);
});

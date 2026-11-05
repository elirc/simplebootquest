test("an empty list", () => {
  expect(highestEstimate([])).toEqual(null);
});

test("all tasks", () => {
  expect(highestEstimate(TASKS)).toEqual("Update deps");
});

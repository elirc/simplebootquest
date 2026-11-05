test("an empty list", () => {
  expect(percentBlocked([])).toEqual(0);
});

test("all tasks", () => {
  expect(percentBlocked(TASKS)).toEqual(63);
});

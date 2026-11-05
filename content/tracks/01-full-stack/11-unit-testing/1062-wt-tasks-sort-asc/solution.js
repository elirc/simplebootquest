test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  tasksByEstimate(TASKS);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("all tasks", () => {
  expect(tasksByEstimate(TASKS)).toEqual(["Plan sprint","Write tests","Fix CSS","Review PR","Add search","Fix login","Deploy API","Design schema"]);
});

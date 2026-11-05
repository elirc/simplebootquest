test('does not mutate the input', () => {
  const before = JSON.stringify(TASKS);
  topTasksByEstimate(TASKS, 1);
  expect(JSON.stringify(TASKS)).toBe(before);
});

test("with 1", () => {
  expect(topTasksByEstimate(TASKS, 1)).toEqual(["Fix CSS"]);
});

test("with 3", () => {
  expect(topTasksByEstimate(TASKS, 3)).toEqual(["Fix CSS","Write docs","Write tests"]);
});

test("with 0", () => {
  expect(topTasksByEstimate(TASKS, 0)).toEqual([]);
});

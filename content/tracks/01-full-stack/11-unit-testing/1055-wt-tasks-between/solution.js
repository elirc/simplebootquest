test("with 3, 4", () => {
  expect(tasksInRange(TASKS, 3, 4)).toEqual(["Update deps","Add search","Plan sprint","Refactor auth"]);
});

test("with 4, 4", () => {
  expect(tasksInRange(TASKS, 4, 4)).toEqual(["Add search","Plan sprint","Refactor auth"]);
});

test("with 3, 3", () => {
  expect(tasksInRange(TASKS, 3, 3)).toEqual(["Update deps"]);
});

test("with \"pd\"", () => {
  expect(searchTasks(TASKS, "pd")).toEqual(["Update deps"]);
});

test("with \"PD\"", () => {
  expect(searchTasks(TASKS, "PD")).toEqual(["Update deps"]);
});

test("with \"  \"", () => {
  expect(searchTasks(TASKS, "  ")).toEqual(["Fix CSS","Update deps","Plan sprint","Design schema","Refactor auth","Write tests","Write docs","Review PR"]);
});

test("with \"zzz\"", () => {
  expect(searchTasks(TASKS, "zzz")).toEqual([]);
});

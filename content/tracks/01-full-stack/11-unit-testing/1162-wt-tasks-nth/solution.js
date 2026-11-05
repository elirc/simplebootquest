test("with 1", () => {
  expect(nthByPriority(TASKS, 1)).toEqual("Fix CSS");
});

test("with 2", () => {
  expect(nthByPriority(TASKS, 2)).toEqual("Write docs");
});

test("with 5", () => {
  expect(nthByPriority(TASKS, 5)).toEqual("Deploy API");
});

test("with 0", () => {
  expect(nthByPriority(TASKS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByPriority(TASKS, 99)).toEqual(null);
});

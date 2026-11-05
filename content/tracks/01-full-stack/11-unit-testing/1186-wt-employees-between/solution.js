test("with 5, 10", () => {
  expect(employeesInRange(EMPLOYEES, 5, 10)).toEqual(["Ada","Ken","Dennis"]);
});

test("with 10, 13", () => {
  expect(employeesInRange(EMPLOYEES, 10, 13)).toEqual(["Ada","Alan","Ken","Katherine"]);
});

test("with 5, 5", () => {
  expect(employeesInRange(EMPLOYEES, 5, 5)).toEqual(["Dennis"]);
});

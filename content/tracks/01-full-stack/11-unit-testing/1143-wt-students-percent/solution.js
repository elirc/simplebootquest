test("an empty list", () => {
  expect(percentGraduated([])).toEqual(0);
});

test("all students", () => {
  expect(percentGraduated(STUDENTS)).toEqual(25);
});

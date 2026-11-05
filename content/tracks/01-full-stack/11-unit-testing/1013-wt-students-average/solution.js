test("an empty list", () => {
  expect(averageScore([])).toEqual(null);
});

test("all students", () => {
  expect(averageScore(STUDENTS)).toEqual(57.8);
});

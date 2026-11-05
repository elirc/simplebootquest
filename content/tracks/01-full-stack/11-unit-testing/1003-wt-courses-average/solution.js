test("an empty list", () => {
  expect(averageEnrolled([])).toEqual(null);
});

test("all courses", () => {
  expect(averageEnrolled(COURSES)).toEqual(2676);
});

test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  topCoursesByLessons(COURSES, 1);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("with 1", () => {
  expect(topCoursesByLessons(COURSES, 1)).toEqual(["React Basics"]);
});

test("with 3", () => {
  expect(topCoursesByLessons(COURSES, 3)).toEqual(["React Basics","Testing JS","TypeScript 101"]);
});

test("with 0", () => {
  expect(topCoursesByLessons(COURSES, 0)).toEqual([]);
});

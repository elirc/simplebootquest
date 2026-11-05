test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  coursesByLessons(COURSES);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("all courses", () => {
  expect(coursesByLessons(COURSES)).toEqual(["Web Security","React Basics","Accessibility","Node APIs","CSS Layouts","Git Essentials","Intro to SQL","GraphQL"]);
});

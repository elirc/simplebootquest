const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 16, enrolled: 1915, level: "advanced"},
  {id: 2, title: "Git Essentials", lessons: 21, enrolled: 3257, level: "advanced"},
  {id: 3, title: "Node APIs", lessons: 44, enrolled: 4418, level: "advanced"},
  {id: 4, title: "GraphQL", lessons: 33, enrolled: 3655, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 31, enrolled: 2906, level: "beginner"},
  {id: 6, title: "React Basics", lessons: 32, enrolled: 508, level: "advanced"},
  {id: 7, title: "Testing JS", lessons: 15, enrolled: 2128, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 9, enrolled: 1250, level: "beginner"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  topCoursesByLessons(COURSES, 1);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("with 1", () => {
  expect(topCoursesByLessons(COURSES, 1)).toEqual(["Node APIs"]);
});

test("with 3", () => {
  expect(topCoursesByLessons(COURSES, 3)).toEqual(["Node APIs","GraphQL","React Basics"]);
});

test("with 0", () => {
  expect(topCoursesByLessons(COURSES, 0)).toEqual([]);
});

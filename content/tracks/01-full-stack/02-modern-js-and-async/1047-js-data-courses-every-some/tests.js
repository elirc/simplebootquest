const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 13, enrolled: 3516, level: "beginner"},
  {id: 2, title: "Intro to SQL", lessons: 28, enrolled: 333, level: "intermediate"},
  {id: 3, title: "CSS Layouts", lessons: 10, enrolled: 1968, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 26, enrolled: 3895, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 39, enrolled: 1766, level: "advanced"},
  {id: 6, title: "Testing JS", lessons: 20, enrolled: 3476, level: "intermediate"},
  {id: 7, title: "GraphQL", lessons: 46, enrolled: 1840, level: "intermediate"},
  {id: 8, title: "TypeScript 101", lessons: 11, enrolled: 4059, level: "intermediate"}
];

test("with 13", () => {
  expect(allCoursesUnder(COURSES, 13)).toEqual(false);
});

test("with 47", () => {
  expect(allCoursesUnder(COURSES, 47)).toEqual(true);
});

test("with 46", () => {
  expect(allCoursesUnder(COURSES, 46)).toEqual(false);
});

const COURSES = [
  {id: 1, title: "GraphQL", lessons: 43, enrolled: 3256, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 24, enrolled: 2147, level: "beginner"},
  {id: 3, title: "TypeScript 101", lessons: 47, enrolled: 2367, level: "intermediate"},
  {id: 4, title: "Git Essentials", lessons: 40, enrolled: 4240, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 25, enrolled: 3256, level: "advanced"},
  {id: 6, title: "Docker Intro", lessons: 45, enrolled: 2815, level: "advanced"},
  {id: 7, title: "CSS Layouts", lessons: 7, enrolled: 31, level: "advanced"},
  {id: 8, title: "Testing JS", lessons: 6, enrolled: 3929, level: "intermediate"}
];

test("an empty list", () => {
  expect(totalEnrolled([])).toEqual(0);
});

test("all courses", () => {
  expect(totalEnrolled(COURSES)).toEqual(22041);
});

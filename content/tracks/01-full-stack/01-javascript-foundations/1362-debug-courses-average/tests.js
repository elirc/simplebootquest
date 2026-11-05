const COURSES = [
  {id: 1, title: "Testing JS", lessons: 12, enrolled: 575, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 31, enrolled: 2951, level: "advanced"},
  {id: 3, title: "Git Essentials", lessons: 15, enrolled: 3997, level: "intermediate"},
  {id: 4, title: "Data Viz", lessons: 36, enrolled: 877, level: "advanced"},
  {id: 5, title: "TypeScript 101", lessons: 39, enrolled: 3301, level: "intermediate"},
  {id: 6, title: "Accessibility", lessons: 29, enrolled: 3329, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 8, enrolled: 2652, level: "advanced"},
  {id: 8, title: "Web Security", lessons: 18, enrolled: 928, level: "advanced"}
];

test("an empty list", () => {
  expect(averageEnrolled([])).toEqual(null);
});

test("all courses", () => {
  expect(averageEnrolled(COURSES)).toEqual(2326.3);
});

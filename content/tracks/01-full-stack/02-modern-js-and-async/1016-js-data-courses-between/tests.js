const COURSES = [
  {id: 1, title: "GraphQL", lessons: 28, enrolled: 2094, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 25, enrolled: 2697, level: "beginner"},
  {id: 3, title: "Web Security", lessons: 11, enrolled: 2390, level: "intermediate"},
  {id: 4, title: "Node APIs", lessons: 42, enrolled: 903, level: "advanced"},
  {id: 5, title: "Docker Intro", lessons: 11, enrolled: 147, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 16, enrolled: 1166, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 14, enrolled: 106, level: "intermediate"},
  {id: 8, title: "Git Essentials", lessons: 11, enrolled: 1138, level: "advanced"}
];

test("with 11, 16", () => {
  expect(coursesInRange(COURSES, 11, 16)).toEqual(["Web Security","Docker Intro","TypeScript 101","Testing JS","Git Essentials"]);
});

test("with 16, 25", () => {
  expect(coursesInRange(COURSES, 16, 25)).toEqual(["CSS Layouts","TypeScript 101"]);
});

test("with 11, 11", () => {
  expect(coursesInRange(COURSES, 11, 11)).toEqual(["Web Security","Docker Intro","Git Essentials"]);
});

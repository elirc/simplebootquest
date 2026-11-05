const COURSES = [
  {id: 1, title: "Node APIs", lessons: 47, enrolled: 1397, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 40, enrolled: 3991, level: "beginner"},
  {id: 3, title: "Web Security", lessons: 24, enrolled: 1600, level: "beginner"},
  {id: 4, title: "Intro to SQL", lessons: 48, enrolled: 4729, level: "intermediate"},
  {id: 5, title: "Docker Intro", lessons: 16, enrolled: 3667, level: "intermediate"},
  {id: 6, title: "GraphQL", lessons: 14, enrolled: 3280, level: "intermediate"},
  {id: 7, title: "Accessibility", lessons: 22, enrolled: 1060, level: "intermediate"},
  {id: 8, title: "React Basics", lessons: 20, enrolled: 4318, level: "beginner"}
];

test("an empty list", () => {
  expect(countCoursesPerLevel([])).toEqual({});
});

test("all courses", () => {
  expect(countCoursesPerLevel(COURSES)).toEqual({"beginner":4,"intermediate":4});
});

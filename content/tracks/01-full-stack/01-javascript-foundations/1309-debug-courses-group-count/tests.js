const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 19, enrolled: 1150, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 14, enrolled: 4104, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 16, enrolled: 2938, level: "advanced"},
  {id: 4, title: "Docker Intro", lessons: 39, enrolled: 3360, level: "advanced"},
  {id: 5, title: "Node APIs", lessons: 28, enrolled: 2727, level: "beginner"},
  {id: 6, title: "Testing JS", lessons: 43, enrolled: 156, level: "intermediate"},
  {id: 7, title: "React Basics", lessons: 11, enrolled: 3564, level: "intermediate"},
  {id: 8, title: "GraphQL", lessons: 22, enrolled: 1789, level: "beginner"}
];

test("an empty list", () => {
  expect(countCoursesPerLevel([])).toEqual({});
});

test("all courses", () => {
  expect(countCoursesPerLevel(COURSES)).toEqual({"beginner":4,"advanced":2,"intermediate":2});
});

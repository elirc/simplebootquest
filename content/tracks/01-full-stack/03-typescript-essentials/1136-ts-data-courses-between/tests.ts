const COURSES = [
  {id: 1, title: "Web Security", lessons: 27, enrolled: 4604, level: "intermediate"},
  {id: 2, title: "Accessibility", lessons: 11, enrolled: 4276, level: "intermediate"},
  {id: 3, title: "TypeScript 101", lessons: 35, enrolled: 1025, level: "beginner"},
  {id: 4, title: "React Basics", lessons: 41, enrolled: 2025, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 39, enrolled: 4433, level: "beginner"},
  {id: 6, title: "GraphQL", lessons: 35, enrolled: 1096, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 34, enrolled: 4211, level: "beginner"},
  {id: 8, title: "Node APIs", lessons: 47, enrolled: 4706, level: "intermediate"}
];

test("with 34, 35", () => {
  expect(coursesInRange(COURSES, 34, 35)).toEqual(["TypeScript 101","GraphQL","Testing JS"]);
});

test("with 35, 39", () => {
  expect(coursesInRange(COURSES, 35, 39)).toEqual(["TypeScript 101","Data Viz","GraphQL"]);
});

test("with 34, 34", () => {
  expect(coursesInRange(COURSES, 34, 34)).toEqual(["Testing JS"]);
});

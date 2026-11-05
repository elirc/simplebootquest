const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 29, enrolled: 2177, level: "advanced"},
  {id: 2, title: "TypeScript 101", lessons: 13, enrolled: 3642, level: "intermediate"},
  {id: 3, title: "Accessibility", lessons: 43, enrolled: 722, level: "intermediate"},
  {id: 4, title: "GraphQL", lessons: 44, enrolled: 2266, level: "intermediate"},
  {id: 5, title: "Testing JS", lessons: 21, enrolled: 3984, level: "beginner"},
  {id: 6, title: "Node APIs", lessons: 32, enrolled: 2428, level: "advanced"},
  {id: 7, title: "Git Essentials", lessons: 7, enrolled: 4633, level: "beginner"},
  {id: 8, title: "Data Viz", lessons: 7, enrolled: 4292, level: "intermediate"}
];

test("with 10", () => {
  expect(lessonsHistogram(COURSES, 10)).toEqual({"0":2,"10":1,"20":2,"30":1,"40":2});
});

test("with 20", () => {
  expect(lessonsHistogram(COURSES, 20)).toEqual({"0":3,"20":3,"40":2});
});

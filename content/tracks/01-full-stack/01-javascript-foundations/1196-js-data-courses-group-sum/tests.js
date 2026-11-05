const COURSES = [
  {id: 1, title: "CSS Layouts", lessons: 8, enrolled: 4306, level: "intermediate"},
  {id: 2, title: "Data Viz", lessons: 21, enrolled: 646, level: "beginner"},
  {id: 3, title: "Intro to SQL", lessons: 30, enrolled: 1652, level: "advanced"},
  {id: 4, title: "Node APIs", lessons: 47, enrolled: 369, level: "advanced"},
  {id: 5, title: "Docker Intro", lessons: 35, enrolled: 450, level: "beginner"},
  {id: 6, title: "GraphQL", lessons: 24, enrolled: 989, level: "intermediate"},
  {id: 7, title: "Accessibility", lessons: 16, enrolled: 1058, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 32, enrolled: 1441, level: "intermediate"}
];

test("an empty list", () => {
  expect(lessonsPerLevel([])).toEqual({});
});

test("all courses", () => {
  expect(lessonsPerLevel(COURSES)).toEqual({"intermediate":80,"beginner":56,"advanced":77});
});

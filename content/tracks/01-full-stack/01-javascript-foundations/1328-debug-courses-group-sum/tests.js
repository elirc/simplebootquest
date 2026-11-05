const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 40, enrolled: 729, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 19, enrolled: 4587, level: "advanced"},
  {id: 3, title: "Intro to SQL", lessons: 20, enrolled: 94, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 14, enrolled: 3920, level: "advanced"},
  {id: 5, title: "GraphQL", lessons: 15, enrolled: 1007, level: "advanced"},
  {id: 6, title: "Git Essentials", lessons: 27, enrolled: 3373, level: "advanced"},
  {id: 7, title: "Data Viz", lessons: 15, enrolled: 4053, level: "advanced"},
  {id: 8, title: "Testing JS", lessons: 48, enrolled: 1107, level: "advanced"}
];

test("an empty list", () => {
  expect(enrolledPerLevel([])).toEqual({});
});

test("all courses", () => {
  expect(enrolledPerLevel(COURSES)).toEqual({"intermediate":729,"advanced":18047,"beginner":94});
});

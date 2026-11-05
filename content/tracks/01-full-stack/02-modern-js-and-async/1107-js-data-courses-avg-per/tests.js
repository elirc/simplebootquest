const COURSES = [
  {id: 1, title: "Data Viz", lessons: 38, enrolled: 1504, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 48, enrolled: 461, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 26, enrolled: 118, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 18, enrolled: 1077, level: "beginner"},
  {id: 5, title: "CSS Layouts", lessons: 7, enrolled: 2919, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 6, enrolled: 1447, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 35, enrolled: 4305, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 36, enrolled: 3472, level: "intermediate"}
];

test("an empty list", () => {
  expect(averageEnrolledPerLevel([])).toEqual({});
});

test("all courses", () => {
  expect(averageEnrolledPerLevel(COURSES)).toEqual({"beginner":1490,"intermediate":2632,"advanced":1447});
});

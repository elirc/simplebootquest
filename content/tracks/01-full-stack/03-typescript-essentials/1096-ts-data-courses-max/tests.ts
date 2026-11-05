const COURSES = [
  {id: 1, title: "GraphQL", lessons: 15, enrolled: 170, level: "beginner"},
  {id: 2, title: "Accessibility", lessons: 32, enrolled: 3161, level: "beginner"},
  {id: 3, title: "Docker Intro", lessons: 13, enrolled: 619, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 46, enrolled: 989, level: "intermediate"},
  {id: 5, title: "React Basics", lessons: 21, enrolled: 1538, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 47, enrolled: 2938, level: "beginner"},
  {id: 7, title: "Web Security", lessons: 21, enrolled: 1684, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 20, enrolled: 324, level: "advanced"}
];

test("an empty list", () => {
  expect(highestLessons([])).toEqual(null);
});

test("all courses", () => {
  expect(highestLessons(COURSES)).toEqual("Intro to SQL");
});

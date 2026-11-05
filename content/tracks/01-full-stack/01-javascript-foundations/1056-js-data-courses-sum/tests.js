const COURSES = [
  {id: 1, title: "Web Security", lessons: 38, enrolled: 1657, level: "intermediate"},
  {id: 2, title: "Intro to SQL", lessons: 32, enrolled: 981, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 17, enrolled: 3425, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 46, enrolled: 2835, level: "beginner"},
  {id: 5, title: "Testing JS", lessons: 15, enrolled: 3105, level: "intermediate"},
  {id: 6, title: "Data Viz", lessons: 45, enrolled: 3769, level: "beginner"},
  {id: 7, title: "Node APIs", lessons: 44, enrolled: 2860, level: "intermediate"},
  {id: 8, title: "TypeScript 101", lessons: 35, enrolled: 679, level: "advanced"}
];

test("an empty list", () => {
  expect(totalEnrolled([])).toEqual(0);
});

test("all courses", () => {
  expect(totalEnrolled(COURSES)).toEqual(19311);
});

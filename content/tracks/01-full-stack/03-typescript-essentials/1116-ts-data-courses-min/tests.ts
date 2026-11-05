const COURSES = [
  {id: 1, title: "GraphQL", lessons: 27, enrolled: 3733, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 6, enrolled: 3712, level: "advanced"},
  {id: 3, title: "CSS Layouts", lessons: 43, enrolled: 4077, level: "intermediate"},
  {id: 4, title: "Testing JS", lessons: 44, enrolled: 4460, level: "intermediate"},
  {id: 5, title: "Git Essentials", lessons: 40, enrolled: 1838, level: "intermediate"},
  {id: 6, title: "React Basics", lessons: 35, enrolled: 495, level: "intermediate"},
  {id: 7, title: "Accessibility", lessons: 48, enrolled: 3411, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 43, enrolled: 1069, level: "intermediate"}
];

test("an empty list", () => {
  expect(lowestLessons([])).toEqual(null);
});

test("all courses", () => {
  expect(lowestLessons(COURSES)).toEqual("Web Security");
});

const COURSES = [
  {id: 1, title: "Web Security", lessons: 12, enrolled: 3744, level: "intermediate"},
  {id: 2, title: "Data Viz", lessons: 39, enrolled: 1153, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 47, enrolled: 4388, level: "advanced"},
  {id: 4, title: "Git Essentials", lessons: 8, enrolled: 1024, level: "intermediate"},
  {id: 5, title: "Docker Intro", lessons: 47, enrolled: 2896, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 14, enrolled: 3664, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 46, enrolled: 279, level: "advanced"},
  {id: 8, title: "CSS Layouts", lessons: 28, enrolled: 2065, level: "beginner"}
];

test("an empty list", () => {
  expect(averageEnrolled([])).toEqual(null);
});

test("all courses", () => {
  expect(averageEnrolled(COURSES)).toEqual(2401.6);
});

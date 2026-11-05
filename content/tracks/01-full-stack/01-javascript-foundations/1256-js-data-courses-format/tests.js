const COURSES = [
  {id: 1, title: "Accessibility", lessons: 18, enrolled: 3361, level: "advanced"},
  {id: 2, title: "CSS Layouts", lessons: 13, enrolled: 2573, level: "advanced"},
  {id: 3, title: "Data Viz", lessons: 45, enrolled: 612, level: "advanced"},
  {id: 4, title: "Intro to SQL", lessons: 30, enrolled: 4682, level: "beginner"},
  {id: 5, title: "Web Security", lessons: 8, enrolled: 4759, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 14, enrolled: 4084, level: "intermediate"},
  {id: 7, title: "TypeScript 101", lessons: 32, enrolled: 1759, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 11, enrolled: 4667, level: "beginner"}
];

test("an empty list", () => {
  expect(describeCourses([])).toEqual([]);
});

test("all courses", () => {
  expect(describeCourses(COURSES)).toEqual(["Accessibility (18)","CSS Layouts (13)","Data Viz (45)","Intro to SQL (30)","Web Security (8)","Git Essentials (14)","TypeScript 101 (32)","Testing JS (11)"]);
});

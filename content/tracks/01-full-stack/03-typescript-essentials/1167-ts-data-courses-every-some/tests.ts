const COURSES = [
  {id: 1, title: "CSS Layouts", lessons: 15, enrolled: 4048, level: "beginner"},
  {id: 2, title: "Accessibility", lessons: 21, enrolled: 2519, level: "beginner"},
  {id: 3, title: "Git Essentials", lessons: 38, enrolled: 3439, level: "beginner"},
  {id: 4, title: "Testing JS", lessons: 40, enrolled: 2038, level: "advanced"},
  {id: 5, title: "React Basics", lessons: 26, enrolled: 439, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 26, enrolled: 1705, level: "intermediate"},
  {id: 7, title: "Docker Intro", lessons: 7, enrolled: 4012, level: "advanced"},
  {id: 8, title: "GraphQL", lessons: 33, enrolled: 979, level: "intermediate"}
];

test("with 21", () => {
  expect(allCoursesUnder(COURSES, 21)).toEqual(false);
});

test("with 41", () => {
  expect(allCoursesUnder(COURSES, 41)).toEqual(true);
});

test("with 40", () => {
  expect(allCoursesUnder(COURSES, 40)).toEqual(false);
});

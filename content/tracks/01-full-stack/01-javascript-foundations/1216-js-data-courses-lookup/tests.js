const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 25, enrolled: 835, level: "advanced"},
  {id: 2, title: "Git Essentials", lessons: 24, enrolled: 1883, level: "advanced"},
  {id: 3, title: "Intro to SQL", lessons: 7, enrolled: 790, level: "beginner"},
  {id: 4, title: "TypeScript 101", lessons: 39, enrolled: 2394, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 37, enrolled: 4683, level: "advanced"},
  {id: 6, title: "Web Security", lessons: 17, enrolled: 2125, level: "beginner"},
  {id: 7, title: "Data Viz", lessons: 18, enrolled: 1061, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 29, enrolled: 3187, level: "beginner"}
];

test("with \"Testing JS\"", () => {
  expect(enrolledOf(COURSES, "Testing JS")).toEqual(3187);
});

test("with \"Nope\"", () => {
  expect(enrolledOf(COURSES, "Nope")).toEqual(null);
});

const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 46, enrolled: 1078, level: "advanced"},
  {id: 2, title: "Web Security", lessons: 39, enrolled: 2975, level: "beginner"},
  {id: 3, title: "GraphQL", lessons: 21, enrolled: 318, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 27, enrolled: 3544, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 28, enrolled: 972, level: "intermediate"},
  {id: 6, title: "Accessibility", lessons: 27, enrolled: 3213, level: "beginner"},
  {id: 7, title: "Testing JS", lessons: 39, enrolled: 1860, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 9, enrolled: 3059, level: "advanced"}
];

test("with 1078, 2975", () => {
  expect(coursesInRange(COURSES, 1078, 2975)).toEqual(["Git Essentials","Web Security","Testing JS"]);
});

test("with 2975, 3059", () => {
  expect(coursesInRange(COURSES, 2975, 3059)).toEqual(["Web Security","Intro to SQL"]);
});

test("with 1078, 1078", () => {
  expect(coursesInRange(COURSES, 1078, 1078)).toEqual(["Git Essentials"]);
});

const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 28, enrolled: 3785, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 29, enrolled: 3174, level: "advanced"},
  {id: 3, title: "Node APIs", lessons: 34, enrolled: 3008, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 44, enrolled: 594, level: "intermediate"},
  {id: 5, title: "Testing JS", lessons: 22, enrolled: 3438, level: "beginner"},
  {id: 6, title: "TypeScript 101", lessons: 30, enrolled: 3832, level: "advanced"},
  {id: 7, title: "Git Essentials", lessons: 10, enrolled: 3336, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 10, enrolled: 1517, level: "advanced"}
];

test("with 1", () => {
  expect(nthByLessons(COURSES, 1)).toEqual("Data Viz");
});

test("with 2", () => {
  expect(nthByLessons(COURSES, 2)).toEqual("Node APIs");
});

test("with 5", () => {
  expect(nthByLessons(COURSES, 5)).toEqual("Docker Intro");
});

test("with 0", () => {
  expect(nthByLessons(COURSES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByLessons(COURSES, 99)).toEqual(null);
});

const COURSES = [
  {id: 1, title: "Accessibility", lessons: 29, enrolled: 2666, level: "advanced"},
  {id: 2, title: "Docker Intro", lessons: 44, enrolled: 2703, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 42, enrolled: 221, level: "advanced"},
  {id: 4, title: "GraphQL", lessons: 17, enrolled: 1199, level: "intermediate"},
  {id: 5, title: "Data Viz", lessons: 43, enrolled: 2558, level: "intermediate"},
  {id: 6, title: "Web Security", lessons: 34, enrolled: 191, level: "beginner"},
  {id: 7, title: "Node APIs", lessons: 32, enrolled: 3865, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 38, enrolled: 4379, level: "beginner"}
];

test("with 1199", () => {
  expect(coursesAbove(COURSES, 1199)).toEqual(["Accessibility","Docker Intro","Data Viz","Node APIs","CSS Layouts"]);
});

test("with 2666", () => {
  expect(coursesAbove(COURSES, 2666)).toEqual(["Docker Intro","Node APIs","CSS Layouts"]);
});

test("with 999999", () => {
  expect(coursesAbove(COURSES, 999999)).toEqual([]);
});

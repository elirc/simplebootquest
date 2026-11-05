const COURSES = [
  {id: 1, title: "Accessibility", lessons: 47, enrolled: 3984, level: "advanced"},
  {id: 2, title: "Node APIs", lessons: 17, enrolled: 1209, level: "advanced"},
  {id: 3, title: "Docker Intro", lessons: 41, enrolled: 1614, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 25, enrolled: 788, level: "intermediate"},
  {id: 5, title: "React Basics", lessons: 20, enrolled: 3431, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 29, enrolled: 4184, level: "intermediate"},
  {id: 7, title: "Web Security", lessons: 11, enrolled: 2079, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 40, enrolled: 2708, level: "intermediate"}
];

test("with 20", () => {
  expect(coursesAbove(COURSES, 20)).toEqual(["Accessibility","Docker Intro","CSS Layouts","TypeScript 101","Data Viz"]);
});

test("with 29", () => {
  expect(coursesAbove(COURSES, 29)).toEqual(["Accessibility","Docker Intro","Data Viz"]);
});

test("with 999999", () => {
  expect(coursesAbove(COURSES, 999999)).toEqual([]);
});

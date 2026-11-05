const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 28, enrolled: 4275, level: "intermediate"},
  {id: 2, title: "GraphQL", lessons: 6, enrolled: 1370, level: "intermediate"},
  {id: 3, title: "Git Essentials", lessons: 20, enrolled: 4611, level: "beginner"},
  {id: 4, title: "Node APIs", lessons: 25, enrolled: 1894, level: "beginner"},
  {id: 5, title: "Data Viz", lessons: 25, enrolled: 489, level: "advanced"},
  {id: 6, title: "React Basics", lessons: 33, enrolled: 2588, level: "intermediate"},
  {id: 7, title: "Web Security", lessons: 30, enrolled: 3682, level: "beginner"},
  {id: 8, title: "Accessibility", lessons: 19, enrolled: 1478, level: "intermediate"}
];

test("with \"beginner\"", () => {
  expect(countCoursesByLevel(COURSES, "beginner")).toEqual(3);
});

test("with \"intermediate\"", () => {
  expect(countCoursesByLevel(COURSES, "intermediate")).toEqual(4);
});

test("with \"advanced\"", () => {
  expect(countCoursesByLevel(COURSES, "advanced")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countCoursesByLevel(COURSES, "nope")).toEqual(0);
});

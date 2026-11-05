const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 32, enrolled: 3573, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 43, enrolled: 4494, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 17, enrolled: 1966, level: "intermediate"},
  {id: 4, title: "GraphQL", lessons: 12, enrolled: 978, level: "advanced"},
  {id: 5, title: "Intro to SQL", lessons: 45, enrolled: 302, level: "beginner"},
  {id: 6, title: "Accessibility", lessons: 20, enrolled: 2940, level: "beginner"},
  {id: 7, title: "React Basics", lessons: 24, enrolled: 963, level: "beginner"},
  {id: 8, title: "Testing JS", lessons: 10, enrolled: 1807, level: "intermediate"}
];

test("with 1, 3", () => {
  expect(pageOfCourses(COURSES, 1, 3)).toEqual({"items":["TypeScript 101","CSS Layouts","Data Viz"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCourses(COURSES, 2, 3)).toEqual({"items":["GraphQL","Intro to SQL","Accessibility"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCourses(COURSES, 3, 3)).toEqual({"items":["React Basics","Testing JS"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCourses(COURSES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});

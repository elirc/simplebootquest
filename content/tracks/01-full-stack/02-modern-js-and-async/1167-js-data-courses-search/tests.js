const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 35, enrolled: 3347, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 32, enrolled: 653, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 12, enrolled: 1370, level: "advanced"},
  {id: 4, title: "Node APIs", lessons: 47, enrolled: 4724, level: "advanced"},
  {id: 5, title: "Testing JS", lessons: 35, enrolled: 1878, level: "intermediate"},
  {id: 6, title: "GraphQL", lessons: 19, enrolled: 1707, level: "beginner"},
  {id: 7, title: "Data Viz", lessons: 11, enrolled: 3192, level: "intermediate"},
  {id: 8, title: "Docker Intro", lessons: 45, enrolled: 993, level: "advanced"}
];

test("with \"cc\"", () => {
  expect(searchCourses(COURSES, "cc")).toEqual(["Accessibility"]);
});

test("with \"CC\"", () => {
  expect(searchCourses(COURSES, "CC")).toEqual(["Accessibility"]);
});

test("with \"  \"", () => {
  expect(searchCourses(COURSES, "  ")).toEqual(["Git Essentials","CSS Layouts","Accessibility","Node APIs","Testing JS","GraphQL","Data Viz","Docker Intro"]);
});

test("with \"zzz\"", () => {
  expect(searchCourses(COURSES, "zzz")).toEqual([]);
});

const COURSES = [
  {id: 1, title: "Web Security", lessons: 39, enrolled: 3419, level: "beginner"},
  {id: 2, title: "Intro to SQL", lessons: 44, enrolled: 1101, level: "beginner"},
  {id: 3, title: "Node APIs", lessons: 11, enrolled: 2793, level: "beginner"},
  {id: 4, title: "TypeScript 101", lessons: 48, enrolled: 3437, level: "advanced"},
  {id: 5, title: "Git Essentials", lessons: 31, enrolled: 989, level: "advanced"},
  {id: 6, title: "Docker Intro", lessons: 38, enrolled: 2937, level: "advanced"},
  {id: 7, title: "Accessibility", lessons: 6, enrolled: 558, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 7, enrolled: 612, level: "intermediate"}
];

test("with \"nt\"", () => {
  expect(searchCourses(COURSES, "nt")).toEqual(["Intro to SQL","Git Essentials","Docker Intro"]);
});

test("with \"NT\"", () => {
  expect(searchCourses(COURSES, "NT")).toEqual(["Intro to SQL","Git Essentials","Docker Intro"]);
});

test("with \"  \"", () => {
  expect(searchCourses(COURSES, "  ")).toEqual(["Web Security","Intro to SQL","Node APIs","TypeScript 101","Git Essentials","Docker Intro","Accessibility","Testing JS"]);
});

test("with \"zzz\"", () => {
  expect(searchCourses(COURSES, "zzz")).toEqual([]);
});

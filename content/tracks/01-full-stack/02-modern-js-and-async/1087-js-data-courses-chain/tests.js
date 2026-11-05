const COURSES = [
  {id: 1, title: "GraphQL", lessons: 13, enrolled: 3312, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 44, enrolled: 403, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 36, enrolled: 3767, level: "advanced"},
  {id: 4, title: "CSS Layouts", lessons: 33, enrolled: 866, level: "intermediate"},
  {id: 5, title: "Accessibility", lessons: 11, enrolled: 4465, level: "intermediate"},
  {id: 6, title: "Git Essentials", lessons: 12, enrolled: 4263, level: "advanced"},
  {id: 7, title: "Docker Intro", lessons: 24, enrolled: 2104, level: "beginner"},
  {id: 8, title: "Web Security", lessons: 36, enrolled: 1906, level: "advanced"}
];

test("with \"beginner\"", () => {
  expect(coursesInLevelRanked(COURSES, "beginner")).toEqual(["Docker Intro","Node APIs"]);
});

test("with \"intermediate\"", () => {
  expect(coursesInLevelRanked(COURSES, "intermediate")).toEqual(["Accessibility","GraphQL","CSS Layouts"]);
});

test("with \"advanced\"", () => {
  expect(coursesInLevelRanked(COURSES, "advanced")).toEqual(["Git Essentials","Data Viz","Web Security"]);
});

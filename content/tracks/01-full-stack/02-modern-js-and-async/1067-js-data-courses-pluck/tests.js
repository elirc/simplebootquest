const COURSES = [
  {id: 1, title: "GraphQL", lessons: 38, enrolled: 884, level: "beginner"},
  {id: 2, title: "Docker Intro", lessons: 17, enrolled: 3129, level: "intermediate"},
  {id: 3, title: "Testing JS", lessons: 42, enrolled: 1017, level: "advanced"},
  {id: 4, title: "React Basics", lessons: 31, enrolled: 2632, level: "advanced"},
  {id: 5, title: "TypeScript 101", lessons: 25, enrolled: 3516, level: "beginner"},
  {id: 6, title: "Accessibility", lessons: 32, enrolled: 3331, level: "intermediate"},
  {id: 7, title: "Git Essentials", lessons: 30, enrolled: 37, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 40, enrolled: 4318, level: "beginner"}
];

test("an empty list", () => {
  expect(summariseCourses([])).toEqual([]);
});

test("all courses", () => {
  expect(summariseCourses(COURSES)).toEqual([{"id":1,"title":"GraphQL","lessons":38},{"id":2,"title":"Docker Intro","lessons":17},{"id":3,"title":"Testing JS","lessons":42},{"id":4,"title":"React Basics","lessons":31},{"id":5,"title":"TypeScript 101","lessons":25},{"id":6,"title":"Accessibility","lessons":32},{"id":7,"title":"Git Essentials","lessons":30},{"id":8,"title":"Data Viz","lessons":40}]);
});

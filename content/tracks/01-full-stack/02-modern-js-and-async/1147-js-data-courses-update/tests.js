const COURSES = [
  {id: 1, title: "Web Security", lessons: 21, enrolled: 278, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 44, enrolled: 4041, level: "advanced"},
  {id: 3, title: "Data Viz", lessons: 8, enrolled: 1565, level: "intermediate"},
  {id: 4, title: "TypeScript 101", lessons: 15, enrolled: 3278, level: "advanced"},
  {id: 5, title: "Node APIs", lessons: 21, enrolled: 2281, level: "beginner"},
  {id: 6, title: "Git Essentials", lessons: 25, enrolled: 206, level: "beginner"},
  {id: 7, title: "React Basics", lessons: 21, enrolled: 312, level: "intermediate"},
  {id: 8, title: "CSS Layouts", lessons: 13, enrolled: 3749, level: "beginner"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  bumpLessons(COURSES, "beginner", 10);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("with \"beginner\", 10", () => {
  expect(bumpLessons(COURSES, "beginner", 10)).toEqual([{"id":1,"title":"Web Security","lessons":21,"enrolled":278,"level":"advanced"},{"id":2,"title":"GraphQL","lessons":44,"enrolled":4041,"level":"advanced"},{"id":3,"title":"Data Viz","lessons":8,"enrolled":1565,"level":"intermediate"},{"id":4,"title":"TypeScript 101","lessons":15,"enrolled":3278,"level":"advanced"},{"id":5,"title":"Node APIs","lessons":31,"enrolled":2281,"level":"beginner"},{"id":6,"title":"Git Essentials","lessons":35,"enrolled":206,"level":"beginner"},{"id":7,"title":"React Basics","lessons":21,"enrolled":312,"level":"intermediate"},{"id":8,"title":"CSS Layouts","lessons":23,"enrolled":3749,"level":"beginner"}]);
});

test("with \"intermediate\", 1", () => {
  expect(bumpLessons(COURSES, "intermediate", 1)).toEqual([{"id":1,"title":"Web Security","lessons":21,"enrolled":278,"level":"advanced"},{"id":2,"title":"GraphQL","lessons":44,"enrolled":4041,"level":"advanced"},{"id":3,"title":"Data Viz","lessons":9,"enrolled":1565,"level":"intermediate"},{"id":4,"title":"TypeScript 101","lessons":15,"enrolled":3278,"level":"advanced"},{"id":5,"title":"Node APIs","lessons":21,"enrolled":2281,"level":"beginner"},{"id":6,"title":"Git Essentials","lessons":25,"enrolled":206,"level":"beginner"},{"id":7,"title":"React Basics","lessons":22,"enrolled":312,"level":"intermediate"},{"id":8,"title":"CSS Layouts","lessons":13,"enrolled":3749,"level":"beginner"}]);
});

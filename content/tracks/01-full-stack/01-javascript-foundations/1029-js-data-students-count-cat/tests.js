const STUDENTS = [
  {id: 1, name: "Bilal", score: 72, age: 20, course: "data", graduated: false},
  {id: 2, name: "Amara", score: 88, age: 24, course: "data", graduated: false},
  {id: 3, name: "Jonah", score: 40, age: 20, course: "data", graduated: true},
  {id: 4, name: "Dara", score: 53, age: 20, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 46, age: 19, course: "web", graduated: true},
  {id: 6, name: "Elif", score: 34, age: 28, course: "data", graduated: true},
  {id: 7, name: "Ines", score: 94, age: 34, course: "design", graduated: true},
  {id: 8, name: "Gita", score: 61, age: 19, course: "design", graduated: true}
];

test("with \"web\"", () => {
  expect(countStudentsByCourse(STUDENTS, "web")).toEqual(2);
});

test("with \"data\"", () => {
  expect(countStudentsByCourse(STUDENTS, "data")).toEqual(4);
});

test("with \"design\"", () => {
  expect(countStudentsByCourse(STUDENTS, "design")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countStudentsByCourse(STUDENTS, "nope")).toEqual(0);
});

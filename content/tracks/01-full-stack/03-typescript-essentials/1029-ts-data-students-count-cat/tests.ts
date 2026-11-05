const STUDENTS = [
  {id: 1, name: "Hugo", score: 49, age: 24, course: "data", graduated: false},
  {id: 2, name: "Elif", score: 36, age: 30, course: "design", graduated: true},
  {id: 3, name: "Luca", score: 39, age: 33, course: "design", graduated: true},
  {id: 4, name: "Amara", score: 45, age: 33, course: "design", graduated: true},
  {id: 5, name: "Dara", score: 55, age: 17, course: "data", graduated: false},
  {id: 6, name: "Keiko", score: 54, age: 28, course: "web", graduated: true},
  {id: 7, name: "Chen", score: 91, age: 21, course: "web", graduated: false},
  {id: 8, name: "Ines", score: 75, age: 29, course: "design", graduated: false}
];

test("with \"web\"", () => {
  expect(countStudentsByCourse(STUDENTS, "web")).toEqual(2);
});

test("with \"data\"", () => {
  expect(countStudentsByCourse(STUDENTS, "data")).toEqual(2);
});

test("with \"design\"", () => {
  expect(countStudentsByCourse(STUDENTS, "design")).toEqual(4);
});

test("with \"nope\"", () => {
  expect(countStudentsByCourse(STUDENTS, "nope")).toEqual(0);
});

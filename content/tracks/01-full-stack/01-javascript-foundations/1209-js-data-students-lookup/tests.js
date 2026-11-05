const STUDENTS = [
  {id: 1, name: "Chen", score: 62, age: 25, course: "web", graduated: false},
  {id: 2, name: "Ines", score: 39, age: 28, course: "data", graduated: true},
  {id: 3, name: "Dara", score: 89, age: 27, course: "data", graduated: true},
  {id: 4, name: "Amara", score: 57, age: 26, course: "design", graduated: true},
  {id: 5, name: "Luca", score: 71, age: 29, course: "design", graduated: true},
  {id: 6, name: "Elif", score: 88, age: 22, course: "data", graduated: true},
  {id: 7, name: "Jonah", score: 43, age: 31, course: "web", graduated: false},
  {id: 8, name: "Gita", score: 56, age: 21, course: "web", graduated: true}
];

test("with \"Ines\"", () => {
  expect(scoreOf(STUDENTS, "Ines")).toEqual(39);
});

test("with \"Nope\"", () => {
  expect(scoreOf(STUDENTS, "Nope")).toEqual(null);
});

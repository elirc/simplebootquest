const STUDENTS = [
  {id: 1, name: "Elif", score: 47, age: 21, course: "data", graduated: false},
  {id: 2, name: "Femi", score: 54, age: 27, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 82, age: 20, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 51, age: 32, course: "data", graduated: true},
  {id: 5, name: "Gita", score: 92, age: 26, course: "web", graduated: true},
  {id: 6, name: "Luca", score: 98, age: 28, course: "design", graduated: false},
  {id: 7, name: "Dara", score: 70, age: 24, course: "design", graduated: true},
  {id: 8, name: "Chen", score: 84, age: 28, course: "web", graduated: false}
];

test("with 54", () => {
  expect(allStudentsUnder(STUDENTS, 54)).toEqual(false);
});

test("with 99", () => {
  expect(allStudentsUnder(STUDENTS, 99)).toEqual(true);
});

test("with 98", () => {
  expect(allStudentsUnder(STUDENTS, 98)).toEqual(false);
});

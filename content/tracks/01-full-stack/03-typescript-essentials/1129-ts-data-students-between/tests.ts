const STUDENTS = [
  {id: 1, name: "Amara", score: 58, age: 24, course: "design", graduated: false},
  {id: 2, name: "Femi", score: 71, age: 30, course: "design", graduated: true},
  {id: 3, name: "Dara", score: 32, age: 28, course: "web", graduated: false},
  {id: 4, name: "Elif", score: 63, age: 19, course: "web", graduated: false},
  {id: 5, name: "Gita", score: 76, age: 20, course: "data", graduated: false},
  {id: 6, name: "Jonah", score: 33, age: 28, course: "data", graduated: true},
  {id: 7, name: "Keiko", score: 68, age: 19, course: "data", graduated: true},
  {id: 8, name: "Luca", score: 71, age: 33, course: "design", graduated: false}
];

test("with 20, 28", () => {
  expect(studentsInRange(STUDENTS, 20, 28)).toEqual(["Amara","Dara","Gita","Jonah"]);
});

test("with 28, 28", () => {
  expect(studentsInRange(STUDENTS, 28, 28)).toEqual(["Dara","Jonah"]);
});

test("with 20, 20", () => {
  expect(studentsInRange(STUDENTS, 20, 20)).toEqual(["Gita"]);
});

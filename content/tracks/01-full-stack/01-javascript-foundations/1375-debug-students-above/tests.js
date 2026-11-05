const STUDENTS = [
  {id: 1, name: "Gita", score: 72, age: 30, course: "design", graduated: false},
  {id: 2, name: "Chen", score: 47, age: 18, course: "web", graduated: false},
  {id: 3, name: "Keiko", score: 87, age: 28, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 95, age: 26, course: "design", graduated: false},
  {id: 5, name: "Femi", score: 45, age: 27, course: "web", graduated: true},
  {id: 6, name: "Jonah", score: 47, age: 24, course: "data", graduated: false},
  {id: 7, name: "Bilal", score: 56, age: 19, course: "web", graduated: false},
  {id: 8, name: "Dara", score: 96, age: 30, course: "web", graduated: false}
];

test("with 47", () => {
  expect(studentsAbove(STUDENTS, 47)).toEqual(["Gita","Keiko","Luca","Bilal","Dara"]);
});

test("with 72", () => {
  expect(studentsAbove(STUDENTS, 72)).toEqual(["Keiko","Luca","Dara"]);
});

test("with 999999", () => {
  expect(studentsAbove(STUDENTS, 999999)).toEqual([]);
});

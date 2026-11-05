const STUDENTS = [
  {id: 1, name: "Ines", score: 84, age: 17, course: "design", graduated: true},
  {id: 2, name: "Dara", score: 80, age: 22, course: "design", graduated: false},
  {id: 3, name: "Hugo", score: 70, age: 32, course: "design", graduated: true},
  {id: 4, name: "Luca", score: 55, age: 18, course: "data", graduated: true},
  {id: 5, name: "Gita", score: 94, age: 26, course: "web", graduated: false},
  {id: 6, name: "Amara", score: 82, age: 26, course: "web", graduated: true},
  {id: 7, name: "Keiko", score: 59, age: 20, course: "design", graduated: false},
  {id: 8, name: "Femi", score: 77, age: 34, course: "data", graduated: false}
];

test("with 70, 80", () => {
  expect(studentsInRange(STUDENTS, 70, 80)).toEqual(["Dara","Hugo","Femi"]);
});

test("with 80, 82", () => {
  expect(studentsInRange(STUDENTS, 80, 82)).toEqual(["Dara","Amara"]);
});

test("with 70, 70", () => {
  expect(studentsInRange(STUDENTS, 70, 70)).toEqual(["Hugo"]);
});

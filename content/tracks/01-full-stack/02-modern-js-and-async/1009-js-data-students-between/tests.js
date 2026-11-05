const STUDENTS = [
  {id: 1, name: "Femi", score: 51, age: 30, course: "design", graduated: true},
  {id: 2, name: "Luca", score: 57, age: 24, course: "data", graduated: true},
  {id: 3, name: "Jonah", score: 58, age: 27, course: "data", graduated: false},
  {id: 4, name: "Elif", score: 45, age: 31, course: "data", graduated: true},
  {id: 5, name: "Chen", score: 51, age: 25, course: "data", graduated: false},
  {id: 6, name: "Bilal", score: 89, age: 33, course: "web", graduated: false},
  {id: 7, name: "Ines", score: 34, age: 20, course: "design", graduated: true},
  {id: 8, name: "Keiko", score: 89, age: 28, course: "web", graduated: false}
];

test("with 25, 28", () => {
  expect(studentsInRange(STUDENTS, 25, 28)).toEqual(["Jonah","Chen","Keiko"]);
});

test("with 28, 30", () => {
  expect(studentsInRange(STUDENTS, 28, 30)).toEqual(["Femi","Keiko"]);
});

test("with 25, 25", () => {
  expect(studentsInRange(STUDENTS, 25, 25)).toEqual(["Chen"]);
});

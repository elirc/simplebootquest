const STUDENTS = [
  {id: 1, name: "Hugo", score: 63, age: 33, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 98, age: 34, course: "web", graduated: false},
  {id: 3, name: "Dara", score: 43, age: 31, course: "data", graduated: false},
  {id: 4, name: "Ines", score: 82, age: 21, course: "web", graduated: true},
  {id: 5, name: "Femi", score: 38, age: 29, course: "web", graduated: false},
  {id: 6, name: "Chen", score: 92, age: 19, course: "data", graduated: false},
  {id: 7, name: "Jonah", score: 97, age: 26, course: "web", graduated: true},
  {id: 8, name: "Elif", score: 33, age: 27, course: "data", graduated: true}
];

test("with 43", () => {
  expect(studentsAbove(STUDENTS, 43)).toEqual(["Hugo","Gita","Ines","Chen","Jonah"]);
});

test("with 82", () => {
  expect(studentsAbove(STUDENTS, 82)).toEqual(["Gita","Chen","Jonah"]);
});

test("with 999999", () => {
  expect(studentsAbove(STUDENTS, 999999)).toEqual([]);
});

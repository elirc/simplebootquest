const STUDENTS = [
  {id: 1, name: "Hugo", score: 66, age: 32, course: "design", graduated: false},
  {id: 2, name: "Amara", score: 56, age: 18, course: "web", graduated: true},
  {id: 3, name: "Femi", score: 43, age: 20, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 84, age: 22, course: "data", graduated: false},
  {id: 5, name: "Gita", score: 48, age: 27, course: "design", graduated: true},
  {id: 6, name: "Elif", score: 42, age: 18, course: "web", graduated: false},
  {id: 7, name: "Chen", score: 46, age: 22, course: "data", graduated: true},
  {id: 8, name: "Ines", score: 38, age: 24, course: "web", graduated: true}
];

test("with 20", () => {
  expect(studentsAbove(STUDENTS, 20)).toEqual(["Hugo","Jonah","Gita","Chen","Ines"]);
});

test("with 22", () => {
  expect(studentsAbove(STUDENTS, 22)).toEqual(["Hugo","Gita","Ines"]);
});

test("with 999999", () => {
  expect(studentsAbove(STUDENTS, 999999)).toEqual([]);
});

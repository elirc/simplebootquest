const STUDENTS = [
  {id: 1, name: "Keiko", score: 98, age: 24, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 74, age: 27, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 87, age: 32, course: "web", graduated: false},
  {id: 4, name: "Elif", score: 49, age: 24, course: "web", graduated: true},
  {id: 5, name: "Jonah", score: 54, age: 28, course: "design", graduated: false},
  {id: 6, name: "Dara", score: 40, age: 33, course: "design", graduated: true},
  {id: 7, name: "Amara", score: 64, age: 25, course: "data", graduated: false},
  {id: 8, name: "Ines", score: 44, age: 28, course: "design", graduated: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  topStudentsByAge(STUDENTS, 1);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with 1", () => {
  expect(topStudentsByAge(STUDENTS, 1)).toEqual(["Dara"]);
});

test("with 3", () => {
  expect(topStudentsByAge(STUDENTS, 3)).toEqual(["Dara","Bilal","Jonah"]);
});

test("with 0", () => {
  expect(topStudentsByAge(STUDENTS, 0)).toEqual([]);
});

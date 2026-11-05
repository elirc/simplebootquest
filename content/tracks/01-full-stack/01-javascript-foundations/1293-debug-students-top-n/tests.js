const STUDENTS = [
  {id: 1, name: "Dara", score: 80, age: 26, course: "web", graduated: true},
  {id: 2, name: "Bilal", score: 95, age: 21, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 47, age: 33, course: "design", graduated: false},
  {id: 4, name: "Ines", score: 38, age: 18, course: "data", graduated: true},
  {id: 5, name: "Jonah", score: 98, age: 20, course: "data", graduated: true},
  {id: 6, name: "Hugo", score: 79, age: 22, course: "data", graduated: true},
  {id: 7, name: "Gita", score: 71, age: 33, course: "data", graduated: true},
  {id: 8, name: "Femi", score: 86, age: 21, course: "web", graduated: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  topStudentsByAge(STUDENTS, 1);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with 1", () => {
  expect(topStudentsByAge(STUDENTS, 1)).toEqual(["Amara"]);
});

test("with 3", () => {
  expect(topStudentsByAge(STUDENTS, 3)).toEqual(["Amara","Gita","Dara"]);
});

test("with 0", () => {
  expect(topStudentsByAge(STUDENTS, 0)).toEqual([]);
});

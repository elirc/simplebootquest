const STUDENTS = [
  {id: 1, name: "Hugo", score: 60, age: 25, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 61, age: 24, course: "data", graduated: true},
  {id: 3, name: "Elif", score: 79, age: 30, course: "data", graduated: false},
  {id: 4, name: "Ines", score: 49, age: 23, course: "web", graduated: true},
  {id: 5, name: "Femi", score: 91, age: 22, course: "design", graduated: true},
  {id: 6, name: "Amara", score: 68, age: 20, course: "design", graduated: true},
  {id: 7, name: "Jonah", score: 44, age: 24, course: "data", graduated: false},
  {id: 8, name: "Dara", score: 80, age: 23, course: "web", graduated: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  studentsByScore(STUDENTS);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("all students", () => {
  expect(studentsByScore(STUDENTS)).toEqual(["Jonah","Ines","Hugo","Keiko","Amara","Elif","Dara","Femi"]);
});

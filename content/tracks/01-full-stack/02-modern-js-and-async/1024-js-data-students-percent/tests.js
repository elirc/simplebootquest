const STUDENTS = [
  {id: 1, name: "Jonah", score: 45, age: 33, course: "data", graduated: false},
  {id: 2, name: "Dara", score: 70, age: 30, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 49, age: 29, course: "data", graduated: false},
  {id: 4, name: "Bilal", score: 78, age: 30, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 36, age: 32, course: "design", graduated: true},
  {id: 6, name: "Ines", score: 68, age: 29, course: "design", graduated: true},
  {id: 7, name: "Chen", score: 55, age: 30, course: "design", graduated: true},
  {id: 8, name: "Gita", score: 79, age: 19, course: "web", graduated: false}
];

test("an empty list", () => {
  expect(percentGraduated([])).toEqual(0);
});

test("all students", () => {
  expect(percentGraduated(STUDENTS)).toEqual(63);
});

const STUDENTS = [
  {id: 1, name: "Femi", score: 51, age: 34, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 60, age: 31, course: "web", graduated: false},
  {id: 3, name: "Amara", score: 96, age: 19, course: "design", graduated: true},
  {id: 4, name: "Gita", score: 91, age: 25, course: "web", graduated: false},
  {id: 5, name: "Chen", score: 52, age: 20, course: "web", graduated: true},
  {id: 6, name: "Luca", score: 78, age: 31, course: "design", graduated: true},
  {id: 7, name: "Elif", score: 46, age: 30, course: "data", graduated: true},
  {id: 8, name: "Hugo", score: 42, age: 25, course: "data", graduated: false}
];

test("an empty list", () => {
  expect(averageAge([])).toEqual(null);
});

test("all students", () => {
  expect(averageAge(STUDENTS)).toEqual(26.9);
});

const STUDENTS = [
  {id: 1, name: "Luca", score: 46, age: 29, course: "data", graduated: false},
  {id: 2, name: "Keiko", score: 53, age: 23, course: "data", graduated: false},
  {id: 3, name: "Gita", score: 84, age: 27, course: "web", graduated: true},
  {id: 4, name: "Hugo", score: 39, age: 33, course: "design", graduated: true},
  {id: 5, name: "Ines", score: 52, age: 28, course: "web", graduated: false},
  {id: 6, name: "Bilal", score: 55, age: 25, course: "web", graduated: false},
  {id: 7, name: "Dara", score: 85, age: 31, course: "web", graduated: true},
  {id: 8, name: "Chen", score: 34, age: 25, course: "design", graduated: false}
];

test("an empty list", () => {
  expect(lowestScore([])).toEqual(null);
});

test("all students", () => {
  expect(lowestScore(STUDENTS)).toEqual("Chen");
});

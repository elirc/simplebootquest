const STUDENTS = [
  {id: 1, name: "Chen", score: 73, age: 20, course: "data", graduated: false},
  {id: 2, name: "Amara", score: 59, age: 25, course: "data", graduated: false},
  {id: 3, name: "Keiko", score: 51, age: 20, course: "data", graduated: true},
  {id: 4, name: "Hugo", score: 79, age: 25, course: "web", graduated: false},
  {id: 5, name: "Jonah", score: 48, age: 20, course: "data", graduated: false},
  {id: 6, name: "Luca", score: 88, age: 27, course: "data", graduated: true},
  {id: 7, name: "Elif", score: 87, age: 31, course: "design", graduated: false},
  {id: 8, name: "Femi", score: 43, age: 26, course: "data", graduated: true}
];

test("an empty list", () => {
  expect(highestScore([])).toEqual(null);
});

test("all students", () => {
  expect(highestScore(STUDENTS)).toEqual("Luca");
});

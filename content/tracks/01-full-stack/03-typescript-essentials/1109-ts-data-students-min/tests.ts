const STUDENTS = [
  {id: 1, name: "Amara", score: 74, age: 23, course: "web", graduated: false},
  {id: 2, name: "Elif", score: 72, age: 17, course: "data", graduated: false},
  {id: 3, name: "Femi", score: 86, age: 28, course: "design", graduated: false},
  {id: 4, name: "Keiko", score: 65, age: 22, course: "web", graduated: true},
  {id: 5, name: "Chen", score: 92, age: 30, course: "web", graduated: false},
  {id: 6, name: "Dara", score: 35, age: 19, course: "data", graduated: false},
  {id: 7, name: "Luca", score: 91, age: 29, course: "web", graduated: false},
  {id: 8, name: "Gita", score: 93, age: 20, course: "data", graduated: false}
];

test("an empty list", () => {
  expect(lowestScore([])).toEqual(null);
});

test("all students", () => {
  expect(lowestScore(STUDENTS)).toEqual("Dara");
});

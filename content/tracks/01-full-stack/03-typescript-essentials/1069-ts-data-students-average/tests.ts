const STUDENTS = [
  {id: 1, name: "Luca", score: 35, age: 32, course: "data", graduated: false},
  {id: 2, name: "Chen", score: 69, age: 18, course: "design", graduated: true},
  {id: 3, name: "Keiko", score: 41, age: 18, course: "web", graduated: true},
  {id: 4, name: "Ines", score: 76, age: 25, course: "design", graduated: true},
  {id: 5, name: "Bilal", score: 47, age: 20, course: "design", graduated: true},
  {id: 6, name: "Dara", score: 83, age: 18, course: "data", graduated: true},
  {id: 7, name: "Elif", score: 87, age: 27, course: "data", graduated: false},
  {id: 8, name: "Gita", score: 42, age: 19, course: "web", graduated: false}
];

test("an empty list", () => {
  expect(averageScore([])).toEqual(null);
});

test("all students", () => {
  expect(averageScore(STUDENTS)).toEqual(60);
});

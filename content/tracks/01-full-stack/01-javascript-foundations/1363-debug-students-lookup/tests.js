const STUDENTS = [
  {id: 1, name: "Keiko", score: 50, age: 18, course: "web", graduated: false},
  {id: 2, name: "Bilal", score: 52, age: 28, course: "web", graduated: true},
  {id: 3, name: "Amara", score: 69, age: 31, course: "web", graduated: false},
  {id: 4, name: "Dara", score: 85, age: 25, course: "web", graduated: false},
  {id: 5, name: "Elif", score: 64, age: 30, course: "data", graduated: false},
  {id: 6, name: "Chen", score: 40, age: 20, course: "data", graduated: true},
  {id: 7, name: "Gita", score: 47, age: 32, course: "design", graduated: false},
  {id: 8, name: "Luca", score: 38, age: 30, course: "web", graduated: false}
];

test("with \"Elif\"", () => {
  expect(scoreOf(STUDENTS, "Elif")).toEqual(64);
});

test("with \"Nope\"", () => {
  expect(scoreOf(STUDENTS, "Nope")).toEqual(null);
});

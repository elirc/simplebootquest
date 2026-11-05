const STUDENTS = [
  {id: 1, name: "Chen", score: 43, age: 18, course: "design", graduated: true},
  {id: 2, name: "Bilal", score: 79, age: 17, course: "data", graduated: false},
  {id: 3, name: "Ines", score: 84, age: 25, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 83, age: 30, course: "web", graduated: false},
  {id: 5, name: "Elif", score: 63, age: 25, course: "data", graduated: true},
  {id: 6, name: "Luca", score: 38, age: 29, course: "web", graduated: true},
  {id: 7, name: "Amara", score: 69, age: 29, course: "data", graduated: false},
  {id: 8, name: "Dara", score: 94, age: 31, course: "data", graduated: false}
];

test("with 5", () => {
  expect(ageHistogram(STUDENTS, 5)).toEqual({"15":2,"25":4,"30":2});
});

test("with 10", () => {
  expect(ageHistogram(STUDENTS, 10)).toEqual({"10":2,"20":4,"30":2});
});

const STUDENTS = [
  {id: 1, name: "Bilal", score: 75, age: 26, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 41, age: 24, course: "design", graduated: true},
  {id: 3, name: "Luca", score: 98, age: 30, course: "data", graduated: true},
  {id: 4, name: "Ines", score: 63, age: 20, course: "design", graduated: true},
  {id: 5, name: "Hugo", score: 63, age: 25, course: "data", graduated: false},
  {id: 6, name: "Amara", score: 100, age: 18, course: "web", graduated: false},
  {id: 7, name: "Jonah", score: 49, age: 33, course: "design", graduated: false},
  {id: 8, name: "Keiko", score: 61, age: 30, course: "web", graduated: true}
];

test("an empty list", () => {
  expect(totalAge([])).toEqual(0);
});

test("all students", () => {
  expect(totalAge(STUDENTS)).toEqual(206);
});

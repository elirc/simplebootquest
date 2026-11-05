const STUDENTS = [
  {id: 1, name: "Gita", score: 43, age: 32, course: "web", graduated: true},
  {id: 2, name: "Ines", score: 97, age: 30, course: "data", graduated: false},
  {id: 3, name: "Chen", score: 54, age: 21, course: "design", graduated: false},
  {id: 4, name: "Jonah", score: 71, age: 32, course: "design", graduated: true},
  {id: 5, name: "Keiko", score: 80, age: 24, course: "web", graduated: false},
  {id: 6, name: "Elif", score: 86, age: 32, course: "design", graduated: false},
  {id: 7, name: "Hugo", score: 65, age: 18, course: "web", graduated: true},
  {id: 8, name: "Bilal", score: 43, age: 26, course: "data", graduated: true}
];

test("an empty list", () => {
  expect(highestAge([])).toEqual(null);
});

test("all students", () => {
  expect(highestAge(STUDENTS)).toEqual("Gita");
});

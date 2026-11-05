const STUDENTS = [
  {id: 1, name: "Chen", score: 33, age: 17, course: "data", graduated: true},
  {id: 2, name: "Gita", score: 73, age: 29, course: "design", graduated: false},
  {id: 3, name: "Ines", score: 44, age: 27, course: "design", graduated: false},
  {id: 4, name: "Dara", score: 44, age: 27, course: "data", graduated: true},
  {id: 5, name: "Femi", score: 35, age: 22, course: "design", graduated: false},
  {id: 6, name: "Keiko", score: 49, age: 33, course: "data", graduated: false},
  {id: 7, name: "Elif", score: 60, age: 26, course: "web", graduated: true},
  {id: 8, name: "Jonah", score: 100, age: 23, course: "design", graduated: true}
];

test("an empty list", () => {
  expect(percentGraduated([])).toEqual(0);
});

test("all students", () => {
  expect(percentGraduated(STUDENTS)).toEqual(50);
});

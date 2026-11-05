const STUDENTS = [
  {id: 1, name: "Keiko", score: 99, age: 20, course: "web", graduated: false},
  {id: 2, name: "Elif", score: 84, age: 27, course: "data", graduated: true},
  {id: 3, name: "Hugo", score: 38, age: 31, course: "design", graduated: true},
  {id: 4, name: "Jonah", score: 43, age: 27, course: "data", graduated: false},
  {id: 5, name: "Luca", score: 91, age: 28, course: "data", graduated: false},
  {id: 6, name: "Gita", score: 98, age: 32, course: "web", graduated: true},
  {id: 7, name: "Ines", score: 37, age: 34, course: "data", graduated: false},
  {id: 8, name: "Chen", score: 46, age: 31, course: "data", graduated: true}
];

test("an empty list", () => {
  expect(agePerCourse([])).toEqual({});
});

test("all students", () => {
  expect(agePerCourse(STUDENTS)).toEqual({"web":52,"data":147,"design":31});
});

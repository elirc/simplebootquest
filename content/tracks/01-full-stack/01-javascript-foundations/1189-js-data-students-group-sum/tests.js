const STUDENTS = [
  {id: 1, name: "Keiko", score: 45, age: 24, course: "data", graduated: false},
  {id: 2, name: "Jonah", score: 72, age: 22, course: "data", graduated: false},
  {id: 3, name: "Femi", score: 72, age: 18, course: "web", graduated: false},
  {id: 4, name: "Luca", score: 84, age: 24, course: "web", graduated: true},
  {id: 5, name: "Hugo", score: 60, age: 31, course: "web", graduated: true},
  {id: 6, name: "Chen", score: 32, age: 31, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 87, age: 33, course: "design", graduated: false},
  {id: 8, name: "Dara", score: 82, age: 28, course: "web", graduated: false}
];

test("an empty list", () => {
  expect(scorePerCourse([])).toEqual({});
});

test("all students", () => {
  expect(scorePerCourse(STUDENTS)).toEqual({"data":117,"web":298,"design":119});
});

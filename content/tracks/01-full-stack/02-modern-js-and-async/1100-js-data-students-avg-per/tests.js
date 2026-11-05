const STUDENTS = [
  {id: 1, name: "Luca", score: 51, age: 26, course: "design", graduated: true},
  {id: 2, name: "Femi", score: 41, age: 22, course: "web", graduated: false},
  {id: 3, name: "Keiko", score: 69, age: 23, course: "data", graduated: false},
  {id: 4, name: "Elif", score: 62, age: 20, course: "web", graduated: true},
  {id: 5, name: "Jonah", score: 81, age: 21, course: "web", graduated: false},
  {id: 6, name: "Ines", score: 77, age: 29, course: "data", graduated: true},
  {id: 7, name: "Bilal", score: 61, age: 33, course: "design", graduated: true},
  {id: 8, name: "Dara", score: 61, age: 19, course: "web", graduated: false}
];

test("an empty list", () => {
  expect(averageAgePerCourse([])).toEqual({});
});

test("all students", () => {
  expect(averageAgePerCourse(STUDENTS)).toEqual({"design":30,"web":21,"data":26});
});

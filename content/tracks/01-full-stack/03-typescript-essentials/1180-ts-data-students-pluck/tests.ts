const STUDENTS = [
  {id: 1, name: "Elif", score: 37, age: 20, course: "design", graduated: false},
  {id: 2, name: "Femi", score: 72, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 53, age: 30, course: "data", graduated: false},
  {id: 4, name: "Jonah", score: 71, age: 33, course: "design", graduated: true},
  {id: 5, name: "Amara", score: 69, age: 25, course: "web", graduated: false},
  {id: 6, name: "Keiko", score: 57, age: 31, course: "data", graduated: false},
  {id: 7, name: "Ines", score: 75, age: 17, course: "web", graduated: true},
  {id: 8, name: "Bilal", score: 71, age: 29, course: "data", graduated: true}
];

test("an empty list", () => {
  expect(summariseStudents([])).toEqual([]);
});

test("all students", () => {
  expect(summariseStudents(STUDENTS)).toEqual([{"id":1,"name":"Elif","age":20},{"id":2,"name":"Femi","age":33},{"id":3,"name":"Hugo","age":30},{"id":4,"name":"Jonah","age":33},{"id":5,"name":"Amara","age":25},{"id":6,"name":"Keiko","age":31},{"id":7,"name":"Ines","age":17},{"id":8,"name":"Bilal","age":29}]);
});

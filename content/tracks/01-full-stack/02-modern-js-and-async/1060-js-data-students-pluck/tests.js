const STUDENTS = [
  {id: 1, name: "Jonah", score: 72, age: 26, course: "web", graduated: true},
  {id: 2, name: "Chen", score: 84, age: 24, course: "data", graduated: true},
  {id: 3, name: "Dara", score: 64, age: 25, course: "data", graduated: false},
  {id: 4, name: "Amara", score: 36, age: 18, course: "data", graduated: false},
  {id: 5, name: "Hugo", score: 92, age: 18, course: "design", graduated: false},
  {id: 6, name: "Femi", score: 71, age: 26, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 61, age: 33, course: "data", graduated: false},
  {id: 8, name: "Keiko", score: 58, age: 20, course: "web", graduated: true}
];

test("an empty list", () => {
  expect(summariseStudents([])).toEqual([]);
});

test("all students", () => {
  expect(summariseStudents(STUDENTS)).toEqual([{"id":1,"name":"Jonah","age":26},{"id":2,"name":"Chen","age":24},{"id":3,"name":"Dara","age":25},{"id":4,"name":"Amara","age":18},{"id":5,"name":"Hugo","age":18},{"id":6,"name":"Femi","age":26},{"id":7,"name":"Gita","age":33},{"id":8,"name":"Keiko","age":20}]);
});

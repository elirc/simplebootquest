const STUDENTS = [
  {id: 1, name: "Elif", score: 74, age: 33, course: "web", graduated: true},
  {id: 2, name: "Jonah", score: 54, age: 24, course: "web", graduated: false},
  {id: 3, name: "Chen", score: 49, age: 32, course: "data", graduated: true},
  {id: 4, name: "Ines", score: 82, age: 18, course: "web", graduated: true},
  {id: 5, name: "Bilal", score: 87, age: 29, course: "web", graduated: true},
  {id: 6, name: "Hugo", score: 91, age: 31, course: "data", graduated: false},
  {id: 7, name: "Dara", score: 44, age: 21, course: "web", graduated: false},
  {id: 8, name: "Femi", score: 32, age: 28, course: "data", graduated: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  bumpScore(STUDENTS, "web", 10);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with \"web\", 10", () => {
  expect(bumpScore(STUDENTS, "web", 10)).toEqual([{"id":1,"name":"Elif","score":84,"age":33,"course":"web","graduated":true},{"id":2,"name":"Jonah","score":64,"age":24,"course":"web","graduated":false},{"id":3,"name":"Chen","score":49,"age":32,"course":"data","graduated":true},{"id":4,"name":"Ines","score":92,"age":18,"course":"web","graduated":true},{"id":5,"name":"Bilal","score":97,"age":29,"course":"web","graduated":true},{"id":6,"name":"Hugo","score":91,"age":31,"course":"data","graduated":false},{"id":7,"name":"Dara","score":54,"age":21,"course":"web","graduated":false},{"id":8,"name":"Femi","score":32,"age":28,"course":"data","graduated":false}]);
});

test("with \"data\", 1", () => {
  expect(bumpScore(STUDENTS, "data", 1)).toEqual([{"id":1,"name":"Elif","score":74,"age":33,"course":"web","graduated":true},{"id":2,"name":"Jonah","score":54,"age":24,"course":"web","graduated":false},{"id":3,"name":"Chen","score":50,"age":32,"course":"data","graduated":true},{"id":4,"name":"Ines","score":82,"age":18,"course":"web","graduated":true},{"id":5,"name":"Bilal","score":87,"age":29,"course":"web","graduated":true},{"id":6,"name":"Hugo","score":92,"age":31,"course":"data","graduated":false},{"id":7,"name":"Dara","score":44,"age":21,"course":"web","graduated":false},{"id":8,"name":"Femi","score":33,"age":28,"course":"data","graduated":false}]);
});

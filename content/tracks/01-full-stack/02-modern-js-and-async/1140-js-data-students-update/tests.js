const STUDENTS = [
  {id: 1, name: "Hugo", score: 41, age: 29, course: "design", graduated: true},
  {id: 2, name: "Amara", score: 76, age: 25, course: "design", graduated: false},
  {id: 3, name: "Jonah", score: 94, age: 23, course: "web", graduated: true},
  {id: 4, name: "Dara", score: 54, age: 31, course: "design", graduated: true},
  {id: 5, name: "Bilal", score: 99, age: 29, course: "data", graduated: true},
  {id: 6, name: "Ines", score: 91, age: 23, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 47, age: 34, course: "web", graduated: true},
  {id: 8, name: "Elif", score: 58, age: 24, course: "data", graduated: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  bumpAge(STUDENTS, "web", 10);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with \"web\", 10", () => {
  expect(bumpAge(STUDENTS, "web", 10)).toEqual([{"id":1,"name":"Hugo","score":41,"age":29,"course":"design","graduated":true},{"id":2,"name":"Amara","score":76,"age":25,"course":"design","graduated":false},{"id":3,"name":"Jonah","score":94,"age":33,"course":"web","graduated":true},{"id":4,"name":"Dara","score":54,"age":31,"course":"design","graduated":true},{"id":5,"name":"Bilal","score":99,"age":29,"course":"data","graduated":true},{"id":6,"name":"Ines","score":91,"age":33,"course":"web","graduated":true},{"id":7,"name":"Gita","score":47,"age":44,"course":"web","graduated":true},{"id":8,"name":"Elif","score":58,"age":24,"course":"data","graduated":true}]);
});

test("with \"data\", 1", () => {
  expect(bumpAge(STUDENTS, "data", 1)).toEqual([{"id":1,"name":"Hugo","score":41,"age":29,"course":"design","graduated":true},{"id":2,"name":"Amara","score":76,"age":25,"course":"design","graduated":false},{"id":3,"name":"Jonah","score":94,"age":23,"course":"web","graduated":true},{"id":4,"name":"Dara","score":54,"age":31,"course":"design","graduated":true},{"id":5,"name":"Bilal","score":99,"age":30,"course":"data","graduated":true},{"id":6,"name":"Ines","score":91,"age":23,"course":"web","graduated":true},{"id":7,"name":"Gita","score":47,"age":34,"course":"web","graduated":true},{"id":8,"name":"Elif","score":58,"age":25,"course":"data","graduated":true}]);
});

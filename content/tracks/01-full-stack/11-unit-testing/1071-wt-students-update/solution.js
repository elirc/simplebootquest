test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  bumpScore(STUDENTS, "web", 10);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with \"web\", 10", () => {
  expect(bumpScore(STUDENTS, "web", 10)).toEqual([{"id":1,"name":"Keiko","score":85,"age":23,"course":"data","graduated":false},{"id":2,"name":"Ines","score":55,"age":19,"course":"web","graduated":true},{"id":3,"name":"Luca","score":78,"age":20,"course":"design","graduated":true},{"id":4,"name":"Bilal","score":79,"age":22,"course":"design","graduated":true},{"id":5,"name":"Dara","score":42,"age":21,"course":"web","graduated":false},{"id":6,"name":"Gita","score":72,"age":18,"course":"web","graduated":true},{"id":7,"name":"Jonah","score":100,"age":19,"course":"data","graduated":false},{"id":8,"name":"Hugo","score":83,"age":31,"course":"design","graduated":true}]);
});

test("with \"data\", 1", () => {
  expect(bumpScore(STUDENTS, "data", 1)).toEqual([{"id":1,"name":"Keiko","score":86,"age":23,"course":"data","graduated":false},{"id":2,"name":"Ines","score":45,"age":19,"course":"web","graduated":true},{"id":3,"name":"Luca","score":78,"age":20,"course":"design","graduated":true},{"id":4,"name":"Bilal","score":79,"age":22,"course":"design","graduated":true},{"id":5,"name":"Dara","score":32,"age":21,"course":"web","graduated":false},{"id":6,"name":"Gita","score":62,"age":18,"course":"web","graduated":true},{"id":7,"name":"Jonah","score":101,"age":19,"course":"data","graduated":false},{"id":8,"name":"Hugo","score":83,"age":31,"course":"design","graduated":true}]);
});

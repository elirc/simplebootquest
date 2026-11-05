test('returns the expected rows', () => {
  expect(result).toEqual([{"course":"data","name":"Ines","age":33,"rank":1},{"course":"data","name":"Dara","age":30,"rank":2},{"course":"data","name":"Hugo","age":26,"rank":3},{"course":"data","name":"Keiko","age":26,"rank":3},{"course":"data","name":"Luca","age":19,"rank":5},{"course":"design","name":"Bilal","age":31,"rank":1},{"course":"design","name":"Amara","age":25,"rank":2},{"course":"design","name":"Jonah","age":18,"rank":3},{"course":"web","name":"Gita","age":24,"rank":1}]);
});

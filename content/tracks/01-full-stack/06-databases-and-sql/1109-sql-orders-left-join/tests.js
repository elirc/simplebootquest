test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"A-102","events":3},{"code":"E-500","events":2},{"code":"A-101","events":1},{"code":"C-300","events":1},{"code":"C-302","events":1},{"code":"D-401","events":1},{"code":"A-100","events":0},{"code":"B-201","events":0},{"code":"E-501","events":0}]);
});

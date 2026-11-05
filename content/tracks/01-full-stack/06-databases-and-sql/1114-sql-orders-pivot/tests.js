test('returns the expected rows', () => {
  expect(result).toEqual([{"code":"A-101","views":1,"likes":0,"shares":0},{"code":"A-102","views":2,"likes":0,"shares":1},{"code":"C-300","views":1,"likes":0,"shares":0},{"code":"C-302","views":1,"likes":0,"shares":0},{"code":"D-401","views":0,"likes":1,"shares":0},{"code":"E-500","views":0,"likes":0,"shares":2}]);
});

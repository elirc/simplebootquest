test('returns the expected rows', () => {
  expect(result).toEqual([{"language":"Go","min_open_issues":31,"max_open_issues":121},{"language":"Python","min_open_issues":60,"max_open_issues":124},{"language":"TypeScript","min_open_issues":87,"max_open_issues":135}]);
});

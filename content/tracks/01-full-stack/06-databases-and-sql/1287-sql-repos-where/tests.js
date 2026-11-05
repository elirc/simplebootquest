test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"api-gateway","open_issues":135},{"name":"cli","open_issues":124},{"name":"web-app","open_issues":121},{"name":"docs","open_issues":100}]);
});

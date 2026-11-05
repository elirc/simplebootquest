test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"notifier","open_issues":60,"stars":201},{"name":"api-gateway","open_issues":135,"stars":1113},{"name":"billing","open_issues":87,"stars":1173},{"name":"infra","open_issues":67,"stars":1406},{"name":"web-app","open_issues":121,"stars":2468},{"name":"cli","open_issues":124,"stars":2822},{"name":"docs","open_issues":100,"stars":3603},{"name":"design-system","open_issues":31,"stars":4262},{"name":"search","open_issues":67,"stars":5164}]);
});

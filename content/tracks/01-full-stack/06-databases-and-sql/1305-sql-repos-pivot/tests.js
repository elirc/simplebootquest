test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"api-gateway","views":3,"likes":0,"shares":0},{"name":"billing","views":0,"likes":3,"shares":0},{"name":"cli","views":1,"likes":1,"shares":0},{"name":"design-system","views":2,"likes":1,"shares":0},{"name":"docs","views":0,"likes":2,"shares":1},{"name":"infra","views":0,"likes":1,"shares":1},{"name":"notifier","views":1,"likes":2,"shares":0},{"name":"search","views":1,"likes":0,"shares":1}]);
});

test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"api-gateway","events":3},{"name":"billing","events":3},{"name":"design-system","events":3},{"name":"docs","events":3},{"name":"notifier","events":3},{"name":"cli","events":2},{"name":"infra","events":2},{"name":"search","events":2},{"name":"web-app","events":0}]);
});

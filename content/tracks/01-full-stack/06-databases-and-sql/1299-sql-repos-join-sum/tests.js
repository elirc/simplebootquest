test('returns the expected rows', () => {
  expect(result).toEqual([{"name":"billing","total":37},{"name":"search","total":30},{"name":"docs","total":25},{"name":"design-system","total":24},{"name":"notifier","total":23},{"name":"api-gateway","total":22},{"name":"infra","total":21},{"name":"cli","total":13}]);
});

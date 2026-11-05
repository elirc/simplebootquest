test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Write tests","total":37},{"title":"Fix login","total":27},{"title":"Write docs","total":25},{"title":"Deploy API","total":21},{"title":"Refactor auth","total":19},{"title":"Add caching","total":11}]);
});

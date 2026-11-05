test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Fix login","estimate":14,"priority":2},{"title":"Write docs","estimate":11,"priority":2},{"title":"Add search","estimate":10,"priority":2},{"title":"Plan sprint","estimate":1,"priority":2},{"title":"Refactor auth","estimate":12,"priority":3},{"title":"Deploy API","estimate":9,"priority":3},{"title":"Review PR","estimate":3,"priority":3},{"title":"Add caching","estimate":5,"priority":4},{"title":"Write tests","estimate":3,"priority":5}]);
});

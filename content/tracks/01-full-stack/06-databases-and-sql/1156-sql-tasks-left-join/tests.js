test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Fix login","events":3},{"title":"Write tests","events":3},{"title":"Add caching","events":2},{"title":"Deploy API","events":2},{"title":"Refactor auth","events":2},{"title":"Write docs","events":2},{"title":"Add search","events":0},{"title":"Plan sprint","events":0},{"title":"Review PR","events":0}]);
});

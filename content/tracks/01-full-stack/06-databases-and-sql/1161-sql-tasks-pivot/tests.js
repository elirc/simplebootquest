test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Add caching","views":1,"likes":0,"shares":1},{"title":"Deploy API","views":1,"likes":0,"shares":1},{"title":"Fix login","views":1,"likes":2,"shares":0},{"title":"Refactor auth","views":0,"likes":2,"shares":0},{"title":"Write docs","views":0,"likes":1,"shares":1},{"title":"Write tests","views":1,"likes":2,"shares":0}]);
});

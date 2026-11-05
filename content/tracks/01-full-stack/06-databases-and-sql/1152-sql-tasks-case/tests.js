test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Add caching","band":"medium"},{"title":"Add search","band":"medium"},{"title":"Deploy API","band":"medium"},{"title":"Fix login","band":"high"},{"title":"Plan sprint","band":"low"},{"title":"Refactor auth","band":"high"},{"title":"Review PR","band":"medium"},{"title":"Write docs","band":"high"},{"title":"Write tests","band":"medium"}]);
});

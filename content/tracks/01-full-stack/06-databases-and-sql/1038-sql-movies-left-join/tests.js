test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Cloud Atlas","events":3},{"title":"Paper Moon","events":3},{"title":"Quiet Storm","events":3},{"title":"Night Train","events":2},{"title":"Red Harbor","events":2},{"title":"Silver Fox","events":2},{"title":"Last Light","events":1},{"title":"Blue River","events":0},{"title":"Open Road","events":0}]);
});

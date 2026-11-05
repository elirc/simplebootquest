test('returns the expected rows', () => {
  expect(result).toEqual([{"title":"Cloud Atlas","views":1,"likes":2,"shares":0},{"title":"Last Light","views":0,"likes":0,"shares":1},{"title":"Night Train","views":1,"likes":0,"shares":1},{"title":"Paper Moon","views":0,"likes":1,"shares":2},{"title":"Quiet Storm","views":1,"likes":2,"shares":0},{"title":"Red Harbor","views":0,"likes":1,"shares":1},{"title":"Silver Fox","views":0,"likes":2,"shares":0}]);
});
